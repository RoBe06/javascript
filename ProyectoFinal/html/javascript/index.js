
 


// class libro{
//     constructor(titulo, autor, genero, precio){
//         this.titulo = titulo;
//         this.autor = autor;
//         this.genero = genero;
//         this.precio = parseInt (precio);
//         this.agredadoCarrito = false;
//     }
//     comprar(){
//         let compra = prompt ("¿Deseas agregar este producto a tu carrito de compras?")
//         if (compra == "si") {
//             this.agregadoCarrito = true;
//             alert("Producto agregado al carrito");
//         }
//         else{
//             this.agredadoCarrito = false;
//             alert("No se agrego nada al carrito");
//         }
        
//     }
//     envio() {
//         if(this.agregadoCarrito = true){
//         let precioTotal = ParseInt (this.precio) + 350;
//         alert ("El precio total es "+ precioTotal)
//         }
//     }
// }
// const RWRB = new libro("Red, White and Royal Blue", "2000", "Romance", "Casey Mcquiston");
// const SAB = new libro("Shadow and Bone", "1500", "Fantasía", "Leigh Bardugo");
// const SS = new libro("Starless Sea", "2300", "Novela de Ficción", "Erin Morgenstern");
// const SAS = new libro("Siege and Storm", "1500", "Fantasía", "Leigh Bardugo");
// const SOC = new libro("Six of Crows", "2000", "Fantasía", "Leigh Bardugo");
// const CK = new libro("Crooked Kingdom", "2000", "Fantasía", "Leigh Bardugo");

// RWRB.comprar()
// RWRB.envio()
// SAB.comprar()
// SAB.envio()
// SS.comprar()
// SS.envio()
// SAS.comprar()
// SAS.envio()
// SOC.comprar()
// SOC.envio()

// CK.comprar()
// CK.envio()


const libros =   [{  id: 1,  nombre: "Red, white and royal blue", precio: 2000 },
                  {  id: 2,  nombre: "Shadow and Bone", precio: 1500 },
                  {  id: 3,  nombre: "Starless Sea"  , precio: 2300},
                  {  id: 4,  nombre: "Siege and Storm" , precio: 1500},
                  {  id: 5,  nombre: "Six of Crows" , precio: 2000},
                  {  id: 6,  nombre: "Crooked Kingdom" , precio: 2000}];

for (const libro of libros) {

    let info = document.createElement("div");

    info.innerHTML = `<h3> ID: ${libro.id}</h3>
                            <p>  Producto: ${libro.nombre}</p>
                            <b> $ ${libro.precio}</b>`;

    document.body.appendChild(info);
}


    let Comprar = document.querySelectorAll(".boton");
    let carrito = [];

    for( let boton of Comprar){
        boton.addEventListener("click" , agregarCarrito);
    }
    console.log(Comprar);

    function agregarCarrito(e){

    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let titulo = padre.querySelector("h5").textContent;
    let parrafo = padre.querySelector("p").textContent;
    
    let producto = {
        nombre: titulo,
        desc:parrafo
    };

    carrito.push(producto)
    console.log(padre);
    console.log(titulo);
}
























// const libros =   [{  id: 1,  nombre: "Red, white and royal blue", precio: 2000 },
//                   {  id: 2,  nombre: "Shadow and Bone", precio: 1500 },
//                   {  id: 3,  nombre: "Starless Sea"  , precio: 2300},
//                   {  id: 4,  nombre: "Siege and Storm" , precio: 1500},
//                   {  id: 5,  nombre: "Six of Crows" , precio: 2000},
//                   {  id: 6,  nombre: "Crooked Kingdom" , precio: 2000}];

// for (const libro of libros) {

//     let info = document.createElement("div");

//     info.innerHTML = `<h3> ID: ${libro.id}</h3>

//                             <p>  Producto: ${libro.nombre}</p>

//                             <b> $ ${libro.precio}</b>`;

//     document.body.appendChild(info);
// }



