const {request,response} = require("express");
const Game = require("../models/games");

const getAllGames = async (req = request,res = response) => {
    const [games,total] = await Promise.all([
        Game.find({}),
        Game.countDocuments()
    ])

    res.json({
        ok:true,
        total,
        games
    })
}

const getById = async (req = request, res = response) => {
    const {id} = req.params;
    const game = await Game.findById(id);

    res.json({
        ok:true,
        game
    })
}

const createGame = async (req = request,res = response) => {
    const {name,gender} = req.body;

    // //Guardar en base de datos
    const game = new Game({name,gender});
    await game.save();

    res.json({
        ok:true,
        name,
        gender
    })
}

const updateGame = async (req = request, res = response) => {
    const {id} = req.params;
    const {...rest} = req.body;

    const game = await Game.findByIdAndUpdate(id,rest,{new:true});

    res.json({
        ok:true,
        game
    })
    
}

const deleteGame = async (req = request, res = response) => {
    const {id} = req.params;

    await Game.findByIdAndDelete(id);

    res.json({
        ok:true,
        msg:"Borrado exitosamente"
    })
}

module.exports = {
    createGame,
    deleteGame,
    getAllGames,
    getById,
    updateGame
}