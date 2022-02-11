
//Color array
let colors =['black','#008080','#0f7d9e','#db7093'];

//button 

let button = document.getElementById('button');


//addEventListener
button.addEventListener('click', function(){
   var randomColor = colors[Math.floor(Math.random() * colors.length)]

   let container = document.getElementById('containerDatos');

   containerDatos.style.background = randomColor;
})




let button2 = document.getElementById('boton2');

button2.addEventListener('click', function(){
   

   let colorboton = document.getElementById('boton2');

   boton2.style.background = "red";
})
