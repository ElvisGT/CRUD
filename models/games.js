const {Schema,model} = require("mongoose");

const gameSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

gameSchema.methods.toJSON = function(){
    const {__v,...rest} = this.toObject();

    return rest
}

const Game = model("game",gameSchema)
module.exports = Game;