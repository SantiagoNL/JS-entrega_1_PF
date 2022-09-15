//Carrito de compras



//productos
const productos = [
    {nombre:"hamburguesa", precio:7},
    {nombre:"papas fritas", precio:5},
    {nombre:"soda", precio:3},
    {nombre:"agua", precio:2},
]
let carrito = []

let pregunta = prompt ("Bienvenido ¿desea comprar algo? \n 1- Si. \n 2- No.").toLowerCase();

    while (pregunta != "si" && pregunta != "no") {
        alert ("Por favor elija entre Si o No")
        pregunta = prompt ("¿desea comprar algo? \n 1- Si. \n 2- No.")
    }

    if (pregunta == "si") {
        let todosLosProd = productos.map( (producto) => producto.nombre + "  $" + producto.precio);
        alert (`Estos son los productos:
        ${todosLosProd.join(" - ")}`)
    }

    else if (pregunta == "no")
    {
        alert ("Gracias, vuelva pronto!")
    }

    while (pregunta !== "no" && pregunta !== "NO") {
        let producto = prompt ("Escribí el producto que desees agregar al carrito").toLowerCase();
        let precio = 0

        if (producto == "hamburguesa" || producto == "papas fritas" ||
         producto == "soda" || producto == "agua"){
            switch (producto) {
                case "hamburguesa": precio = 7
                    break;
                case "papas fritas": precio = 5
                    break;
                case "soda": precio = 3
                    break;
                case "agua": precio = 2
                    break;
                default:
                    break;
            }

            let cantidad = parseInt(prompt("¿Cuantas unidades Quiere?"))

            carrito.push ({producto, cantidad, precio})
         }
         else {
            alert ("Lo sentimos, no contamos con ese producto \n :(")
         }

         pregunta = prompt ("¿Desea seguir comprando? Si o No").toLowerCase();

         while (pregunta == "no"){
            alert ("Gracias por su compra")

            carrito.forEach((total) => {
                console.log (`producto: ${total.producto}, unidades: ${total.cantidad},
                Total a pagar: ${total.cantidad * total.precio}`)
            })
            break;
         }
    }

    const totalFinal = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)

    alert (`Total a pagar:  $ ${totalFinal}`)
    
    console.log (`Total a pagar:  $ ${totalFinal}`)