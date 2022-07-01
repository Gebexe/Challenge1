//variables true y false para identificar la funcion a llamar
let asincronico = true
let promesa = false

//primera funcion asincronica forma 1
async function functionAsync (a,b) {
  const response = await fetch(a);
  let data = await response.json();
if(b== "users"){
data.forEach(element => {
 const {phone,...rest} = element;
 
 delete rest.address.zipcode;
 delete rest.address.geo.lat;

 return rest;
 });

console.log(data);
} else {return console.log(data);
  };
}

//segunda funcion promesa forma 2
function functionPromise (a,b) {
  if(b == "users"){
  fetch(a)
  .then(response => {
    return response.json();
   })

  .then(data => { 
    data.forEach(element => {
      const {phone,...rest} = element;

      delete rest.address.zipcode;
      delete rest.address.geo.lat;

      return rest;
      })
    console.log(data);
   });
};
  if(b == "albums"){
  fetch(a)
  .then(response => {
    return response.json();
  })

  .then(data => { 
    console.log(data);
  });
  };
}

//funcion getUser que llama a alguna de las 2 funciones dependiendo del parametro
function getUser(a) {
 if (a) {
  return functionAsync("https://jsonplaceholder.typicode.com/users","users");
 }
  else {
    return functionPromise("https://jsonplaceholder.typicode.com/users","users");
  };
 }
//funcion getAlbums que llama a alguna de las 2 funciones segun el 2do parametro, el primero sirve para buscar el userId dentro de la api
function getAlbums(a,b) {
  if (b){
    return functionAsync('https://jsonplaceholder.typicode.com/users/'+a+'/albums',"albums");
  } else {
    return functionPromise('https://jsonplaceholder.typicode.com/users/'+a+'/albums',"albums");
  };
}