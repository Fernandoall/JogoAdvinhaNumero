// Your JavaScript goes here

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var contagemPalpites = 1;
var botaoReinicio;