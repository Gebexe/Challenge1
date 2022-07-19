const express = require("express");
const User = require("../models/user");
const Companies = require ("../models/companies")
const router = express.Router();

// Método POST para la creación de datos en la BD.
router.post("/users", async (req, res) => {
    const data = new User({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        company: req.body.company
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.post("/companies", async (req, res) => {
    const data = new Companies({
        name: req.body.name
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método GET para la obtención de todos los datos de la BD.
router.get("/users", async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.get("/companies", async (req, res) => {
    try {
        const data = await Companies.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método GET para la obtención de un dato de la BD.
router.get("/users/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.get("/companies/:id", async (req, res) => {
    try {
        const data = await Companies.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método PUT(PATCH) para la actualización de un dato de la BD.
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await User.findByIdAndUpdate(
            id, 
            updatedData, 
            options
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.put("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await Companies.findByIdAndUpdate(
            id, 
            updatedData, 
            options
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método DELETE para la eliminación de un dato de la BD.
router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.delete("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Companies.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;