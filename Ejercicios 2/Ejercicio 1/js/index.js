
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

   boton2.style.background = "#3fb3b3";
})


let button3 = document.getElementById('boton3');

button3.addEventListener('click', function(){
   

   let colorboton2 = document.getElementById('boton3');

   boton3.style.background = "#056997";
})



let button4 = document.getElementById('boton4');

button4.addEventListener('click', function(){
   

   let colorboton3 = document.getElementById('boton4');

   boton4.style.background = "#1e4a5f";
})
