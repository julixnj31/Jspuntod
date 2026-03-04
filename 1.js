let producto = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let cantidad = parseInt(prompt("Ingrese la cantidad comprada:")); 
let total = precio * cantidad;
console.log("El total a pagar por " + cantidad + " " + producto + " es: " + total);
