// Ejercicio 1 - Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) 

export function dimeTipoMotor() {
  let input = document.querySelector('#input-motor')
  let mensajeTipoMotor = document.querySelector('#mensaje-info-motor')

  switch (Number(input.value)) {
    case 0:
      mensajeTipoMotor.innerHTML = `<strong>No hay establecido un valor definido</strong> para el tipo de bomba`
      break
    case 1:
      mensajeTipoMotor.innerHTML = `La bomba es una <strong>bomba de agua</strong>`
      break
    case 2:
      mensajeTipoMotor.innerHTML = `La bomba es una <strong>bomba de gasolina</strong>`
      break
    case 3:
      mensajeTipoMotor.innerHTML = `La bomba es una <strong>bomba de hormigón</strong>`
      break
    case 4:
      mensajeTipoMotor.innerHTML = `La bomba es una bomba de <strong>pasta alimenticia</strong>`
      break
    default:
      mensajeTipoMotor.innerHTML = `<strong>No existe ningún valor válido</strong> para tipo de bomba`
      break
  }
}