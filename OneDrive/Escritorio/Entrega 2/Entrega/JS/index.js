// Solicitar al usuario datos personales y datos del viaje //

let nombre = prompt ("Ingrese su Nombre y Apellido")
let mail = prompt ("Ingrese su mail")
let destino = prompt ("Ingrese el destino")
let viaje = parseInt (prompt ("Ingrese la cantidad de días de duración del viaje"));

// Calcular el valor de la asistencia al viajero // 

function consulta (viaje){
    alert (`Su Asistencia al Viajero a cotizar es por: ${viaje} días`);
}
consulta (viaje);

function asistencia (viaje){
    alert ("$" + viaje * 250)
}
asistencia (viaje);

// Se le ofrece 50% OFF comprando hoy // 

alert ("Compre hoy y obtenga un 50% OFF en su Asistencia al Viajero")

let precio = parseInt (prompt ("Ingrese el valor cotizado anteriormente, $"));

function descuento (precio, descuento){
    return (precio * .50);
  }

 let precioFinal=descuento(precio);

alert("La cotización de su Asistencia es $"+precioFinal);