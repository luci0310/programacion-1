function almacenar_indice(index){
    localStorage.setItem("indice",index)
}

function editar(index){
    let lista_productos=JSON.parse( localStorage.getItem("Productos"))

    document.getElementById("descripcion").value=lista_productos[index].descripcion
    document.getElementById("precio").value=lista_productos[index].precio
    document.getElementById("categoria").value=lista_productos[index].categoria

    //guardo el indice
    localStorage.setItem("indice",index)

    //apago el boton actualizar
    document.getElementById("btn_guardar").style.display="none"

    //encendemos el boton actualizar 
    document.getElementById("btn_actualizar").style.display="block"
}