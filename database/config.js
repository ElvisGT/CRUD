const mongoose = require("mongoose");
const port = 27017;


mongoose.set("strictQuery",false);
const connection = mongoose.connect(`mongodb://localhost:${port}/games`)
    .then(console.log("Conectado exitosamente a la base de datos"))
    .catch(err => console.log("Ha ocurrido el siguiente error: ", err))


module.exports = connection;