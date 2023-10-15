export default class Producto 
{
    constructor(nombre, precio) 
    {
        this.id = this.generateShortRandomId();
        this.nombre = nombre;
        this.precio = precio;
    }

    generateShortRandomId() 
    {
        return Math.floor(Math.random() * 1000); // Cambia el rango según tus necesidades
    }
}


