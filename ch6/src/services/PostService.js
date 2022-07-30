export function getPosts() {
    //TODO
    return fetch("http://localhost:3333/posts" ,
    
    {   
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
}

export function setPost(title,content) {
    //TODO
    return fetch("http://localhost:3333/posts" ,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title,content})
    }).then(data => data.json()).then(console.log("historia nueva registrada"))
}