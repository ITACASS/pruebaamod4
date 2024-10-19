class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarDetalles() {
        return this.productos.map(prod => `${prod.nombre}: $${prod.precio}`).join('<br>');
    }
}

const productosDisponibles = [
    new Producto("Leche", 1500),
    new Producto("Arroz", 1870),
    new Producto("Lentejas", 2500),
    new Producto("Cafe", 4000),
    new Producto("Pañales", 5000)
];

const carrito = new Carrito();
const productosDiv = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");
const finalizarBtn = document.getElementById("finalizar");

function mostrarProductos() {
    productosDisponibles.forEach((producto, index) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `${producto.nombre} - $${producto.precio} <button class="button" onclick="agregarAlCarrito(${index})">Agregar</button>`;
        productosDiv.appendChild(productoDiv);
    });
}

function agregarAlCarrito(index) {
    const productoSeleccionado = productosDisponibles[index];
    carrito.agregarProducto(productoSeleccionado);
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoDiv.innerHTML = carrito.mostrarDetalles();
}

finalizarBtn.addEventListener("click", () => {
    const total = carrito.calcularTotal();
    alert(`Compra finalizada. Total: $${total}`);
    carrito.productos = []; // Vaciar el carrito al finalizar
    actualizarCarrito();
});

mostrarProductos();
