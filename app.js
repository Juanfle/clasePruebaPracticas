let boton = document.getElementById("comprarButton");
let inputProducto = document.getElementById("productoInput");
let inputCantidad = document.getElementById("cantidadInput");
let resultado = document.getElementById("precioProducto");

boton.addEventListener("click", function() {
    let producto = inputProducto.value;
    let cantidad = inputCantidad.value;
    console.log("Producto elegido:", producto);

    if (producto == 1) {
        resultado.innerText = "El precio total es: $" + (100 * cantidad);
    } else if (producto == 2) {
        resultado.innerText = "El precio total es: $" + (200 * cantidad);
    } else if (producto == 3) {
        resultado.innerText = "El precio total es: $" + (300 * cantidad);
    } else {
        resultado.innerText = "Producto no encontrado";
    }
});