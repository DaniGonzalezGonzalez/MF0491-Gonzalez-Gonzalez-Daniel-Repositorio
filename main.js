import { dimeTipoMotor } from "../Ejercicios-JS/ejercicio-1.js"
import { validarPar } from "../Ejercicios-JS/ejercicio-2.js"
import { parrafoDatos } from "../Ejercicios-JS/ejercicio-3.js"
import { ejercicioTriangulo } from "../Ejercicios-JS/ejercicio-4.js"
import { sacarNumeroMayor } from "../Ejercicios-JS/ejercicio-5.js"

// Ejercicio 1 - Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) 

document.querySelector('.form-ejercicio-1').addEventListener('submit', (e) => {
  e.preventDefault()
  dimeTipoMotor()
})


// Ejercicio 2 - Escribir un programa que me pida un número entero y validar si el número es impar. 

document.querySelector('.form-ejercicio-2').addEventListener('submit', (e) => {
  e.preventDefault()
  validarPar()
})


// Ejercicio 3 - Añadir un nuevo elemento <p> con nombre de clase “miParrafo“ y con el texto que ponga tu nombre y apellidos y sea hijo del body. 

document.querySelector('.form-ejercicio-3').addEventListener('submit', (e) => {
  e.preventDefault()
  parrafoDatos()
})


// Ejercicio 4 - Calcular el área de un triángulo y mostrar por pantalla el resultado. El área de un triángulo se calcula por medio de la siguiente fórmula: 

document.querySelector('.form-ejercicio-4').addEventListener('submit', (e) => {
  e.preventDefault()
  ejercicioTriangulo()
})


// Ejercicio 5 - Empleando JavaScript interacciona con el usuario para que pueda cargar un array con números. Cuando el usuario lo desee parará de cargar lo números y se indicará cuál número mayor.

const formEj5 = document.querySelector('.form-ejercicio-5')

formEj5.addEventListener('click', (e) => {
  e.preventDefault()
  sacarNumeroMayor(e)
})

