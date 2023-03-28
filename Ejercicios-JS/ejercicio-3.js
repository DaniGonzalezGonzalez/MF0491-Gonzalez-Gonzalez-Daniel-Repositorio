// Ejercicio 3 - Añadir un nuevo elemento <p> con nombre de clase “miParrafo“ y con el texto que ponga tu nombre y apellidos y sea hijo del body. 

export function parrafoDatos() {
  let nombre = document.querySelector('#nombre')
  let apellidos = document.querySelector('#apellidos')
  const expRegLetras = /^[a-zA-Z\u00C0-\u017F\s]+$/
  if (nombre.value === '' || apellidos.value === '') return

  let p = null
  if (expRegLetras.test(nombre.value) && expRegLetras.test(apellidos.value)) {
    if (document.querySelector('.body .miParrafo')) {
      // Aquí si ya existe el párrafo lo borraremos, en vez de hacer un return (porque al hacer return no me deja probarlo más veces como quiero)
      let parrafoHijo = document.querySelector('.miParrafo')
      document.querySelector('body').removeChild(parrafoHijo)
    }
    p = document.createElement('p')
  }
  p.setAttribute('class', 'miParrafo')
  p.innerHTML = `
  Nombre: <strong>${nombre.value}</strong>; Apellidos: <strong>${apellidos.value}</strong>
  `
  document.querySelector('body').append(p)
}