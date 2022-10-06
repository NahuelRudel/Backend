class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return `${this.mascotas.length}`
    }

    addBook(libro) {
        this.libros.push(libro)
    }

    getBookNames() {
        return this.libros.map(libro => `${libro.nombre}`)
    }
}

const usuario1 = new Usuario("Nahuel", "Rudel")

console.log(usuario1.getFullName())

usuario1.addMascota("perro")
usuario1.addMascota("gato")

console.log(usuario1.countMascotas())

usuario1.addBook({nombre:"Cuentos policiales", autor: "Edgar Allan Poe"})
usuario1.addBook({nombre:"Billy Summers", autor: "Stephen King"})

console.log(usuario1.getBookNames())