let minutos = parseInt(prompt("Ingrese el número de minutos:")); 
let horasConvertidas = Math.floor(minutos / 60);
let minutosRestantes = minutos % 60;
console.log(minutos + " minutos equivalen a " + horasConvertidas + " horas y "
+ minutosRestantes + " minutos");
