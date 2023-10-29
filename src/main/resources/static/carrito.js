$(document).ready(function() {
    let carrito = [];

    // Cuando se hace clic en cualquier botón dentro de los productos
$('button').click(function() {
    console.log('Hiciste clic en un botón');
    const nombre = $(this).data('nombre');
    const precio = $(this).data('precio');
    carrito.push({ nombre, precio });
    actualizarCarrito();
});




    // Función para actualizar el contenido del carrito en la página
    function actualizarCarrito() {
        const listaCarrito = $('#lista-carrito');
        listaCarrito.empty();

        carrito.forEach((producto, index) => {
            listaCarrito.append(`
                <li>
                    Nombre: ${producto.nombre} - Precio: $${producto.precio}
                    <button class="eliminar-del-carrito" data-index="${index}">Eliminar</button>
                </li>
            `);
        });

        // Manejar clics en botones "Eliminar"
        $('.eliminar-del-carrito').click(function() {
            const index = $(this).data('index');
            carrito.splice(index, 1);
            actualizarCarrito();
        });
    }
});
