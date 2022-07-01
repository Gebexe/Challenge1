
//Variable jsonInput que es el contenedor del string inputeado en el html, y variable json que va a tener los contenidos del string json en objeto JS, 
let jsonInput =[];
let json={};

//Funcion establecida con el boton en html
document.querySelector('button').onclick = () => {

    //Capturador del string json que aparece en la etiqueta con id=json, tambien esta separando cada elemento del json para crear un array
     jsonInput = document.querySelector("#json").value.replace(/\n|]/g,'').split(/,|:|{|}/g);
     jsonInput.pop();
     jsonInput.shift();
    
      //Establezco variables para poder hacer un if que me guarde una key y un value del array, isKey sirve como switch de separacion entre key y value
      let isKey = true;
      let key = null;
      let value = null;

      jsonInput.forEach((token) => {
          if(isKey) {
              key = token.trim().replace(/"/g,'');
              isKey = false;
              return;
          }
          //Funcion que identifica el tipo de dato del value, y lo devuelve segun el valor que corresponde, de no encontrarlo, devuelve la misma cadena que recibio
          function Parseador (token){
          if (token.includes("0","1","2","3","4","5","6","7","8","9")){
            value = Number(token);
          return value;
          }
          if (token.includes("null")){
            value = null;
            return value;
          }
          if (token.includes("true")){
            value = true;
            return value;
          }
          if (token.includes("false")) {
            value = false;
            return value;
          }
          else {return value = token.trim().replace(/"/g,'')};}   
          
          value = Parseador(token);
          isKey = true;
          
          json[key] = value;
      });
    
    console.log(`                             
            ██████████████            
        ████              ████        
      ██    ██          ██    ██      
    ██                          ██    
    ██      ██          ██      ██    
  ██  ██                      ██  ██  
  ██        ██          ██        ██  
  ██  ██        ██  ██        ██  ██  
██          ▒▒▒▒      ▒▒▒▒          ██
██              ▒▒▒▒▒▒              ██
██      ████████  ▒▒  ████████      ██
██      ████████      ████████      ██
  ██      ████          ████      ██  
  ██                              ██  
  ██                              ██  
    ██      ▒▒          ▒▒      ██    
    ██    ▒▒    ██  ██    ▒▒    ██    
      ██▒▒  ██          ██  ▒▒██      
      ██        ██  ██        ██      
        ██                  ██        
          ██    ██  ██    ██          
            ██          ██            
              ██████████              
   
         `+ 'JSON PARSEADO');

return jsonInput, json

};
