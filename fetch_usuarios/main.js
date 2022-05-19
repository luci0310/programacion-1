const consumir_datos= async()=>{
    const datos_recibidos=await fetch('https://jsonplaceholder.typicode.com/users')   

    const lista_usuarios=await datos_recibidos.json() 
    //es un array 
    let items=[]
    
    //el forEach funciona para buscar en la lista de usuarios(arreglo) o navegar en ella 
    lista_usuarios.forEach(usuario => {
        let li=`<li class="list-group-item">${usuario.name}</li>`
        //el push le inserta un li 
        items.push(li)
    });
    //buscamos el ul 
    //el innerHTML sirve para llenarlo de copdigo html 
    //el join para quitarle las comillas al let li=(limpiarlo y dejarlo como HTML puro)
    document.getElementById("list_user").innerHTML=items.join('')
}

consumir_datos()
//el await genera una espera para que se termine de cargar una linea y de ahi avanza a la siguiente