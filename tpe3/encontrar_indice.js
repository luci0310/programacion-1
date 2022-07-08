function almacenar_indice(index)
{
    localStorage.setItem("indice",index)
}

function editar(index)
{
    let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))

    document.getElementById("descripcion").value=lista_producto[index].descripcion
    document.getElementById("precio").value=lista_producto[index].precio
    document.getElementById("imagen").value=lista_producto[index].imagen
    document.getElementById("aroma").value=lista_producto[index].aroma
    document.getElementById("categoria").value=lista_producto[index].categoria

    localStorage.setItem("indice",index)

    document.getElementById("btn_guardar").style.display="none"

    document.getElementById("btn_actualizar").style.display="block"
}