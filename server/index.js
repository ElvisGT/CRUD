const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
    app = null;
    port = null;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8089;

        //middlewares
        this.middlewares();
    }

    middlewares(){
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log("Server corriendo en el puerto",this.port);
        })
    }

}


module.exports = Server;