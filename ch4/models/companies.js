const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    } ,
    //user es un id de la coleccion de usuarios de la primera tabla
    User:{
        type: Schema.Types.ObjectId,
        ref:'user'
    }
});
module.exports = mongoose.model("company", dataSchema);