const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    userName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    company:[{
        type: Schema.Types.ObjectId,
        ref:"company",
        required: true
    }]
});

// El nombre "Data" es el nombre con el que accedo a este modelo. 
module.exports = mongoose.model("user", dataSchema);