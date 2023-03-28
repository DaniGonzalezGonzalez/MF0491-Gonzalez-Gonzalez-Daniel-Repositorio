// Ejercicio 2 - Escribir un programa que me pida un número entero y validar si el número es impar. 

export function validarPar () {
  let inputNumeroPar = document.querySelector('#numero-par-impar')
  let mensajeNumPar = document.querySelector('#mensaje-info-numero-par-impar')
  let expRegNumeros = /^[0-9]*$/
  let numero = inputNumeroPar.value

  if (expRegNumeros.test(Number(numero)) && numero > 0) {
    if (Number(numero) % 2 === 0) {
      mensajeNumPar.innerHTML = `El número introducido <strong>${numero}</strong> es par`
    } else {
      mensajeNumPar.innerHTML = `El número introducido <strong>${numero}</strong> es impar`
    }
  } else {
    mensajeNumPar.innerHTML = `Formato <strong>no válido</strong>`
    return
  }
}