
 

class libro{
    constructor(titulo, autor, genero, precio){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.precio = parseInt (precio);
        this.agredadoCarrito = false;
    }
    comprar(){
        let compra = prompt ("¿Deseas agregar este producto a tu carrito de compras?")
        if (compra == "si") {
            this.agregadoCarrito = true;
            alert("Producto agregado al carrito");
        }
        else{
            this.agredadoCarrito = false;
            alert("No se agrego nada al carrito");
        }
        
    }
    envio() {
        if(this.agregadoCarrito = true){
        let precioTotal = ParseInt (this.precio) + 350;
        alert ("El precio total es "+ precioTotal)
        }
    }
}

const RWRB = new libro("Red, White and Royal Blue", "2000", "Romance", "Casey Mcquiston");
const SAB = new libro("Shadow and Bone", "1500", "Fantasía", "Leigh Bardugo");
const SS = new libro("Starless Sea", "2300", "Novela de Ficción", "Erin Morgenstern");
const SAS = new libro("Siege and Storm", "1500", "Fantasía", "Leigh Bardugo");
const SOC = new libro("Six of Crows", "2000", "Fantasía", "Leigh Bardugo");
const CK = new libro("Crooked Kingdom", "2000", "Fantasía", "Leigh Bardugo");

RWRB.comprar()
RWRB.envio()

SAB.comprar()
SAB.envio()

SS.comprar()
SS.envio()

SAS.comprar()
SAS.envio()

SOC.comprar()
SOC.envio()

CK.comprar()
CK.envio()
