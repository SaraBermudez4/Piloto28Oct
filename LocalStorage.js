//Ejercicio de la creación de un formulario, los datos quedarán almacenados en el LocalStorage y luego se pintarán en los inputs al momento de cargar la pagina (usando el evento DOMContentLoaded)

const form = document.getElementById('formulario')
form.addEventListener('submit', traerDatos)

function traerDatos(event) {
    let primerNombre = document.querySelector("#txtPrimerNombre").value
    let segundoNombre = document.querySelector("#txtSegundoNombre").value
    let primerApellido = document.querySelector("#txtPrimerApellido").value
    let segundoApellido = document.querySelector("#txtSegundoApellido").value
    let telefono = document.querySelector("#txtTelefono").value
    guardarDatos(primerNombre, segundoNombre, primerApellido, segundoApellido, telefono);
    event.preventDefault()
}

function guardarDatos(primerNombre, segundoNombre, primerApellido, segundoApellido, telefono) {
    let persona = {
        nombre1: primerNombre,
        nombre2: segundoNombre,
        apellido1: primerApellido,
        apellido2: segundoApellido,
        telefono: telefono
    }
    localStorage.setItem('Persona', JSON.stringify(persona))
    localStorage.setItem('Nombre', persona.nombre1 + " " + persona.nombre2)
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerDatos()
})

function obtenerDatos() {
    let nombre = localStorage.getItem('Nombre')
    document.querySelector("#txtPrimerNombre").value = nombre
    console.log(nombre);
}