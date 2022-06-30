for (let i = 1; i <= 12; i++){
    let usuario = prompt ("ingrese su DNI")
if(i === 10){
    mensaje = alert (` ${usuario} La clase a la que intenta ingresar, ya esta completa`);
    break;
}
let mensaje = `Bienvenido ${usuario}, sos el alumno N° ${i} de esta clase`;
alert (mensaje);
}