// Ejercicio 5 - Empleando JavaScript interacciona con el usuario para que pueda cargar un array con números. Cuando el usuario lo desee parará de cargar lo números y se indicará cuál número mayor.

let array = []

export function sacarNumeroMayor(e) {
  const inputNumeros = document.querySelector('#input-numeros')
  const inputValue = inputNumeros.value

  if (e.target.id === 'btn-añadir-numero') {
    array.push(Number(inputValue))
    const p = document.querySelector('#parrafo-array-numeros')
    p.innerHTML = `Números introducidos: ${array.join(', ')}`
  }
  if (e.target.id === 'btn-numero-mayor') {
    const numMayorArray = document.querySelector('#numero-array-mayor')
    if (Math.max(...array) > 0) {
      numMayorArray.innerHTML = `<strong style = color:red>${Math.max(...array)}</strong>`
    }
  }
}