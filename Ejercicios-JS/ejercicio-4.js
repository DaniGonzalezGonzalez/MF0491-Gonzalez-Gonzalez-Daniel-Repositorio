// Ejercicio 4 - Calcular el área de un triángulo y mostrar por pantalla el resultado. El área de un triángulo se calcula por medio de la siguiente fórmula: 

export function ejercicioTriangulo() {
  let baseTriangulo = document.querySelector('#base')
  let alturaTriangulo = document.querySelector('#altura')
  let mensajeAreaTriangulo = document.querySelector('#mensaje-area-triangulo')

  if (!isNaN(baseTriangulo.value) && !isNaN(alturaTriangulo.value)) {
    if (baseTriangulo.value <= 0 || alturaTriangulo <= 0) return
    mensajeAreaTriangulo.innerHTML = `Con base de <strong>${Number(baseTriangulo.value)}</strong> y altura de <strong>${Number(alturaTriangulo.value)}</strong>, el área del triángulo es de: <strong>${(Number(baseTriangulo.value) * Number(alturaTriangulo.value) / 2)}</strong>`
  } else {
    mensajeAreaTriangulo.innerHTML = `Formato de la base ${baseTriangulo.value} o altura (${alturaTriangulo.value}) no válido`
  }
}