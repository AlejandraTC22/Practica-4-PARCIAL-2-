import Producto from './producto.js';
import ListaCompra from './listaCompra.js';

const lista = new ListaCompra();
const productList = document.getElementById("productList");
const totalCost = document.getElementById("totalCost");

document.getElementById("addBtn").addEventListener("click", () => 
{
    const productInput = document.getElementById("product");
    const priceInput = document.getElementById("price");

    const nombre = productInput.value;
    const precio = parseFloat(priceInput.value);

    if (nombre && !isNaN(precio)) 
    {
        const producto = new Producto(nombre, precio);
        lista.agregarProducto(producto);
        productInput.value = "";
        priceInput.value = "";
        actualizarLista();
    }
});

document.getElementById("deleteBtn").addEventListener("click", () => 
{
    const deleteId = document.getElementById("deleteId").value;
    lista.eliminarProducto(parseInt(deleteId));
    document.getElementById("deleteId").value = "";
    actualizarLista();
});

function actualizarLista() {
    productList.innerHTML = "";
    lista.productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `ID: ${producto.id} - Producto: ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;
        productList.appendChild(li); // Agregar el elemento li a la lista productList
    });

    const costoTotal = lista.calcularCostoTotal();
    totalCost.textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
}


