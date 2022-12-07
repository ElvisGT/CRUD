const {request,response} = require("express");
const {Game} = require("../models/games");

const getAllGames = (req = request,res = response) => {
    res.json({
        msg:"Aqui estan todos"
    })
}

const createGame = async (req = request,res = response) => {
    const {name,gender} = req.body;

    // //Guardar en base de datos
    const game = new Game({name,gender});
    await game.save();

    res.json({
        msg:"Creado correctamente",
    })
}


module.exports = {
    getAllGames,
    createGame
}