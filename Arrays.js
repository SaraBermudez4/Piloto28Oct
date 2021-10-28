//Creación de arreglos
let arreglo = new Array()
let colores = []
let arreglo1 = new Array(10)
let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log(dias);

//Acceder a una posición del arreglo
console.log(dias[2]);

//Obtener la longitud del arreglo
console.log(dias.length);

//Convertir arreglo a String
let diasString = dias.toString()
console.log(diasString);

//Agregar elemento a la ultima posición
dias.push('lunes1')
console.log(dias);

//Agregar elemento a la primera posición
dias.unshift('domingo1')
console.log(dias);

//Eliminar elemento de la primera posición
dias.shift()
console.log(dias);

//Eliminar elemento de la ultima posición
dias.pop()
console.log(dias);

//Conocer el indice del arreglo
console.log(dias.indexOf('domingo2'));

//Recorrer arreglos
for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}
dias.forEach(dia => {
    console.log(dia);
});
dias.map((dia) => {
    console.log(dia);
})

//Matrices en js
let categoria = ['Accion', 'Terror', 'Suspenso', 'Comedia']
let pelicula = ['pelicula1', 'Pelicula2', 'Pelicula3', 'Pelicula4']

let cine = [categoria, pelicula]

console.log(cine);

for (let i = 0; i < 3; i++) {
    console.log('Categoria:' + cine[0][i]);
    console.log('Peliculas:' + cine[1][i]);
}

//Destructuring
let product = {
    id: 123,
    nombre: "Café",
    precio: 2000
}
let { id, nombre, precio } = product
console.log(id);
console.log(nombre);
console.log(precio);
console.log(precio + 2300);