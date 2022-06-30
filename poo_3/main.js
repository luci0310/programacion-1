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
    let producto=new producto()
    producto.obtener_producto()
}
listar()