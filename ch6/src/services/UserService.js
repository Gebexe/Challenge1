
export function getUser(email, password) {
    // TODO: antentos a lo que hay que hacer aquí para que funcione en serio.
    return fetch("http://localhost:3333/users" ,
    
    {   
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json()).then(data=> {
        for (var i = 0; i < data.length; i++){
        if (email === data[i].email && password === data[i].password) {
            return window.location.href = "/AllPost"}
            
        }
        
    }).catch(error => console.log(error));

}

export function setUser(name, email, password) {
    // TODO:
    return fetch("http://localhost:3333/users" ,
    {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify( {name, email, password} )
    }).then(data =>data.json()).catch(error => console.log(error))
}