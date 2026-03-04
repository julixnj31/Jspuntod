let precioProducto = parseFloat(prompt("Ingrese el precio del producto:")); 
let descuento = precioProducto * 0.10;
let precioFinal = precioProducto - descuento;
console.log("El precio final con 10% de descuento es: " + precioFinal);
