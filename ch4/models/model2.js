const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
});

// El nombre "Data" es el nombre con el que accedo a este modelo. 
module.exports = mongoose.model("companies", dataSchema);