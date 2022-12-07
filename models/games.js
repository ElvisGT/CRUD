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

gameSchema.JSON = function(){
    const {__v,...rest} = this.Object();

    return {
        rest
    }
}

const Game = model("game",gameSchema)
module.exports = {Game};