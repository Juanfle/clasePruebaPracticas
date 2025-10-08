
// Actividad DOM
// Crear un título h1 de bienvenida para la página, además de un párrafo p con la lista de los 
// elementos a comprar, enumerados.
// Crear un input de texto donde el usuario pueda escribir el nombre o número del producto que 
// quiere comprar. Agregar un botón que diga “Comprar”. Debajo del botón colocar un párrafo 
// vacío p donde se va a mostrar el precio del producto elegido.
// Al hacer click en el botón:
// Capturar lo que se escribió en el input, mostrar en la consola el producto que se eligió y 
// luego en el párrafo mostrar el precio correspondiente del producto. Si el producto no existe, 
// o está mal escrito, mostrar “Producto no encontrado”.
// Adicional, puede agregarse otro input que recibe un número de productos, y el precio final 
// que se muestre sea el total de todos los productos (un solo producto varias veces)

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