const express = require("express");
const cors = require("cors");
require("dotenv").config();

//Locales
const connection = require("../database/config");
const gameRouter = require("../routes/games");

class Server {
    app = null;
    port = null;
    path = null

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8089;
        this.paths = {
            games:'/api/v1/games'
        }

        //middlewares
        this.middlewares();

        //routing
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.games,gameRouter)
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log("Server corriendo en el puerto",this.port);
        })
    }


}


module.exports = Server;