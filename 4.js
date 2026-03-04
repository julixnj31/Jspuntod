let kmRecorridos = parseFloat(prompt("Ingrese los kilómetros recorridos:")); 
let consumoKm = parseFloat(prompt("Ingrese el consumo por kilómetro (litros/km):"));
let litrosConsumidos = kmRecorridos * consumoKm
console.log("El consumo total de gasolina es: " + litrosConsumidos + " litros");