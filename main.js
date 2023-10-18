//Esto es un comentario/*

alert("¡Bienvenidx a la Escuela Borges!");
let nombre = prompt("Hola, ¿cuál es tu nombre?");

if (nombre !== null) {

  alert("Hola " + nombre);
} else {
alert("¡Hola, usuario anónimo!");
}
while (true) {
let respuesta = prompt("¿Quieres calcular tu promedio final? (Sí/No)");
respuesta = respuesta.toLowerCase();

if (respuesta === "si" || respuesta === "sí") {

  alert("Recuerda que el promedio final NO se redondea.");
} else if (respuesta === "no") {
  alert("Hasta pronto!");
  break;
} else {
  alert("Respuesta inválida. Responde con 'Sí' o 'No'.");
}


let nota1;
let nota2;
let nota3;
let promedio;
let suma;

nota1= parseFloat(prompt("Digite el promedio de la primera etapa"))
nota2= parseFloat(prompt("Digite el promedio de la segunda etapa"))
nota3= parseFloat(prompt("Digite el promedio de la tercera etapa"))

suma = nota1 + nota2 + nota3;
promedio = suma/3

alert("El promedio final es de " + promedio);{

if (promedio < 6) {
    alert("Tu calificación es: Desaprobado");
  } else if (promedio <= 6) {
    alert("Tu calificación es: Aprobado");
  } else if (promedio <= 9 && promedio <= 8) {
    alert("Tu calificación es: Muy Bueno");
  } else if (promedio <= 3) {
    alert("Tu calificación es: Aplazo");
  } else if (promedio <= 10) {
    alert("Tu calificación es: Excelente");
  }
}


}