let readlineSync = require('readline-sync');
let vueltas = Number(readlineSync.question('Ingrese cantidad de vueltas: ')); // se agrega solicitud de cantidad de vueltas
let tiempoVuelta = [];
let tiempoTotal = 0;

cargarTiempoVueltas(); // se agrega las vueltas como parametro para cada funcion
calcularTiempoTotal();
calcularPromedioVuelta();

function cargarTiempoVueltas() {    //funcion para cargar el tiempo de cada vuelta
    for (let i = 0; i < vueltas; i++) {
        tiempoVuelta[i] = readlineSync.questionInt('Ingrese tiempo en minutos de la vuelta ' + (i + 1) + ' :');
        console.log('El tiempo de la vuelta ' + (i + 1) + ' es:' + tiempoVuelta[i] + ' minutos');
    }
}
function calcularTiempoTotal() { // funcion para calcular el tiempo total de vueltas
    for (let i = 0; i < vueltas; i++) {
        tiempoTotal += tiempoVuelta[i];
    }
    console.log('El tiempo total es: ' + tiempoTotal + ' minutos');
}
function calcularPromedioVuelta() {
    let promedio = tiempoTotal / vueltas;
    console.log('El tiempo promedio de vueltas es: ' + promedio + ' minutos');
}