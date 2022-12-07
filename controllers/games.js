const {request,response} = require("express");

const getAllGames = (req = request,res = response) => {
    res.json({
        msg:"Aqui estan todos"
    })
}

const createGame = () => {

}


module.exports = {
    getAllGames
}