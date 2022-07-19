require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

// Sección de conexión a la base de datos.
mongoose.connect(mongoString)
.then(console.log("conectado"))
.catch((error)=>console.log(error));

// Sección de aplicación (servidor web).
const app = express();
app.use(cors());
app.use(express.json());

// Esto es para leer el body codificado.
app.use(
    express.urlencoded({
        extended: true,
    })
);

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecuándose en http://${process.env.HOST}:${process.env.PORT}/`);
});