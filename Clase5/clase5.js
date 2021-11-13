

function guardar(){
    let libro = prompt("Ingrese la cantidad que desea comprar");
    alert ("Agregaste " + libro + " libros a tu carrito");
}

class libro {
    constructor(titulo, precio, genero, autor) {
        this.titulo  = titulo;
        this.precio  = parseFloat(precio);
        this.genero  = genero;
        this.autor   = autor;
        this.vendido = false;
    }
    
    vender() {
        this.vendido = true;
    }
}
const libro1 = new libro("'Red, White and Royal Blue'", "2500", "Romance", "Casey Mcquiston");
const libro2 = new libro("'Shadow and Bone'", "2000", "Fantasía", "Leigh Bardugo");
producto1.vender();
