//dejo configurado el export
import Producto from "./producto.js";


function guardar()
{
    let descripcion=document.getElementById("descripcion").value
    let precio=document.getElementById("precio").value
    let categoria=document.getElementById("categoria").value

    let producto=new Producto(descripcion,precio,categoria)

    //invocamos(ejecutamos) el metodo guardar_producto, perteneciente a la xlase prdocuto
    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener('click',guardar)

function listar(){
    let producto=new Producto()
    producto.obtener_productos()
}
listar()

function eliminar(){

    let indice=localStorage.getItem("indice")

    //creamos una instancia para acceder a los metodos/atributos a la clase producto
    let producto=new producto()

    //haciendo uso de la instancia
    //invocamos el método eliminar_prodcuto()
    producto.eliminar_producto(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)