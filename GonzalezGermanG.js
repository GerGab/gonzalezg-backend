
class usuario{
    constructor(nombre,apellido,libros,mascotas){

        !libros && (libros=[]);
        !mascotas && (mascotas=[]);

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre,autor){
        this.libros.push({nombre:nombre,autor:autor})
    }

    getBookNames(){
        return this.libros.map(libro => libro.nombre)
    }
}

// Segmento designado a mostrar la funcionalidad de la clase creada

const soyYo = new usuario("German","Gonzalez")
console.log(soyYo.getFullName())
soyYo.addMascota("gato")
soyYo.addMascota("perro")
console.log(soyYo.countMascotas())
soyYo.addBook("El señor de los anillos la comunidad del anillo","Tolkien")
soyYo.addBook("El señor de los anillos Las dos Torres","Tolkien")
console.log(soyYo.getBookNames())