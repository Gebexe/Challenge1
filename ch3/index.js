//modulo de node HTTP, se utiliza para levantar el servidor
const http = require("http");

const host = "localhost";
const port = 8000;

//clase usuario que nos permitira construir un usuario con la informacion de id, firstname, lastname, age, y country

class Usuario {
    constructor(id, firstname, lastname, age, country){
        this.id =id
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.country = country
    }

};

const todosusuarios = [
    new Usuario("1","Homero","Simpson","37","Estados Unidos"),
    new Usuario("2","Marge","Simpson","34","Estados Unidos"),
    new Usuario("3","Bart","Simpson","10","Estados Unidos"),
    new Usuario("4","lisa","Simpson","9","Estados Unidos"),
    new Usuario("5","Maggie","Simpson","1","Estados Unidos"),
    
];

exports.todosusuarios = todosusuarios
exports.Usuario= Usuario
//funcion usuarioListener que nos dara una aplicacion JSON con la info de los usuarios que construimos anteriormente, tiene un switch que nos permite catchear 
//cualquier direccion que no sea /usuario

const usuarioListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
     switch (req.url){
        case "/usuarios":
      res.writeHead(200);
    res.end(JSON.stringify(todosusuarios));
    break;
    default:
        res.writeHead("404");
        res.end(JSON.stringify({statusCode : 404, message : "no se encontro nada"}));
        }
};
//levantamos el server y damos notificacion en console.log

const server = http.createServer(usuarioListener);
server.listen(port,host, () => console.log ('web iniciada en "http://localhost:8000/usuarios"'));