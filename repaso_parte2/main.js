const imprimir = async ()=>{
    const datos= await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    const datos_definidos= await datos.json()

    let filas=[]

    datos_definidos.forEach((element,index) => {
        let fila=`
        <tr>
            <td>${index+1}</td>
            <td>${element.nombre}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML=filas.join('')
}
const boton=document.getElementById("mostrar")
boton.addEventListener("click",imprimir)