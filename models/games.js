const {Schema,model} = require("mongoose");

const gameSchema = Schema({
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

const game = model("Game",gameSchema)
module.exports = game;