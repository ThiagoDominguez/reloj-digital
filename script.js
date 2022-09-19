let mostrarFecha = document.getElementById("fecha").innerHTML;

let mostrarReloj = document.getElementById("reloj");

let fecha = new Date();

let diaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

let mesAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.getElementById("fecha").innerHTML = `${
  diaSemana[fecha.getDay()]
},${fecha.getDate()} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
  let hora = new Date();
  mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);
