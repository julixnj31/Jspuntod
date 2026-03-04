let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en km:"));
let velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:")); 
let tiempo = distancia / velocidad;
console.log("El tiempo estimado de viaje es: " + tiempo + " horas");
