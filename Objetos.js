//Creación de un metodo con atributos y metodos
let persona = {
    nombre: "Pepito",
    edad: 32,
    genero: "Masculino",
    trabaja: true,
    biografia: function () {
        console.log(this.nombre + " " + this.edad + " " + this.genero + " " + this.trabaja);
    },
    saludar: function () {
        alert('Hola, soy' + this.nombre)
    }
}

console.log(persona)
//Acceder a las propiedades y metodos usando la notación de punto
persona.saludar()
console.log(persona.nombre);
persona.biografia()

//Modificar o crear nuevas propiedades usando la notación de punto
persona.nombre = "Mariana"
persona.apellido = "Castaño"

console.log(persona);

//Creación del metodo constructor
function Person(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.genero = "Masculino"
    this.trabaja = true
    this.amigo = persona
    this.hablar = function () {
        alert('Estoy hablando')
    }
}

//Creando un objeto a partir del constructor
let persona1 = new Person('Susana', 32)
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.amigo);

//Crear un objeto a partir de otro objeto
let persona2 = Object.create(persona1)
console.log(persona2.nombre);