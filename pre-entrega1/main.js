//simulador de prestamos

const TNA = 137.50;
const TEA = 267.92;
const CFTA = 375.60;
const descuentoEstudiante = 10;
const montoSolicitadoMax = 250000;
let interesPaquete;
let interesCuota;

let sosCliente = prompt("¿Sos estudiante de Coder House?");

let tipoDePaquete = prompt("Ingrese el tipo de paquete: Black/Gold/otro:").toUpperCase();

if(tipoDePaquete == "BLACK") {
    interesPaquete = 30;
} else if (tipoDePaquete == "GOLD") {
    interesPaquete = 40;
} else {
    interesPaquete = 50;
}
console.log("interes paquete: " + interesPaquete);

let montoSolicitado = parseFloat(prompt("Ingrese el monto del prestamo: (Máx: $" + montoSolicitadoMax + ")"));

while (montoSolicitado > montoSolicitadoMax) {
    alert("superior al monto maximo permitido! Máx: $" + montoSolicitadoMax)
    montoSolicitado = parseFloat(prompt("Ingrese el monto del prestamo: (Máx: $" + montoSolicitadoMax + ")"));
}
console.log("Monto solicitado: " + montoSolicitado);

let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));

while (cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48) {
    alert("solo es posible solicitar en: 12/24/36/48 cuotas!" )
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));
}
console.log("cuotas: " + cuotas);

if(cuotas == "12") {
    interesCuota = 30;
} else if (cuotas == "24") {
    interesCuota = 40;
} else if (cuotas == "36") {
    interesCuota = 50;
    } else {
        interesCuota = 60
    }

console.log("interes Cuota: " + interesCuota);

let cuotaPura = montoSolicitado / cuotas;
let interesPaqueteCuota = interesPaquete / cuotas;
let interesCuotaCuota = interesCuota / cuotas;
let tnaCuota = TNA / cuotas;
let teaCuota = TEA / cuotas;
let cftaCuota = CFTA / cuotas;

let cuotaPuraInteresPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
console.log("cuotaPuraInteresPaqueteCuota");
let cuotaPuraInteresCuotaCuota = (cuotaPura * interesCuotaCuota) / 100;
console.log("cuotaPuraInteresCuotaCuota");
let cuotaPuraTnaCuota = (cuotaPura * tnaCuota) / 100;
console.log("cuotaPuraTnaCuota");
let cuotaPuraTeaCuota = (cuotaPura * teaCuota) / 100;
console.log("cuotaPuraTeaCuota");
let cuotaPuraCftaCuota = (cuotaPura * cftaCuota) / 100;
console.log("cuotaPuraCftaCuota");

let valorDeCuota = cuotaPura + cuotaPuraInteresPaqueteCuota + cuotaPuraInteresCuotaCuota + cuotaPuraTnaCuota + cuotaPuraTeaCuota + cuotaPuraCftaCuota;

