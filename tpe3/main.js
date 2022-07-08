import Perfumes from "./perfumes.js";

function guardar()
{
    let descripcion=document.getElementById("descripcion").value
    let precio=document.getElementById("precio").value
    let imagen=document.getElementById("imagen").value
    let aroma=document.getElementById("aroma").value
    let categoria=document.getElementById("categoria").value

    let perfumes=new Perfumes(descripcion,precio,imagen,aroma,categoria)

    perfumes.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar()
{
    let perfumes=new Perfumes
    perfumes.obtener_producto()
}
listar()

function eliminar()
{
    let indice=localStorage.getItem("indice")
    let perfumes=new Perfumes
    perfumes.eliminar_producto()
    
    const truck_modal = document.querySelector('#mymodal');
    const modal = bootstrap.Modal.getInstance(truck_modal);    
    modal.hide()
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar()
{
    let perfumes=new Perfumes

    perfumes.actualizar_producto()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)