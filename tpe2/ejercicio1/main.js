// creo la funcion flecha 
const consumir_datos= async() =>{
    const datos_recibidos=await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales ')
    const datos=await datos_recibidos.json()
    let filas=[]
    //creamos el for Each
    datos.forEach((element,index) => {
        let fila=
        `<tr>
          <td>${index+1}</td>
          <td>${element.casa.nombre}</td>
          <td>${element.casa.compra}</td>
          <td>${element.casa.venta}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
//invocamos la funcion 
consumir_datos()