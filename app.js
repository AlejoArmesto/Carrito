const productos = [
    {nombre: "Gorras", precio: 50},
    {nombre: "Remeras", precio: 100},
    {nombre: "Buzos", precio: 150},
    {nombre: "Pantalones", precio: 200},
    {nombre: "Zapatillas", precio: 250},
];
let carrito = []

let seleccion = prompt("Buenas! Desea comprar algun producto? Si o No")

while (seleccion != "Si" && seleccion != "No"){
    alert("Porfavor ingrese Si o No")
    seleccion = prompt ("Buenas! Desea comprar algun producto? Si o No")
}

if(seleccion == "Si"){
    alert("Aqui tiene una lista de nuestros productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "No"){
    alert("Gracias por su visita, que tenga lindo dia!")
}

while(seleccion != "No"){
    let producto = prompt ("Agregue un producto a su carrito")
    let precio = 0

    if (producto == "Gorras" || producto == "Remeras" || producto == "Buzos" || producto == "Pantalones" || producto == "Zapatillas"){
        switch (producto) {
            case "Gorras":
            precio = 50;
            break;
            case "Remeras":
            precio = 100;
            break;
            case "Buzos":
            precio = 150;
            break;
            case "Pantalones":
            precio = 200;
            break;
            case "Zapatillas":
            precio = 250;
            break;
            default: 
            break;
          }
        let unidades = parseInt (prompt ("Cuantas unidades quiere llevar?"))

        carrito.push ({producto, unidades, precio})
        console.log (carrito)
    } else {
        alert ("El producto que solicita no esta disponinble")
    }

    seleccion = prompt ("Desea seguir comprando?")
    while (seleccion === "No"){
        alert ("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`El total a pagar por su compra es: ${total}`)
