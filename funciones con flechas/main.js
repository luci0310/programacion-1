//si es en una sola linea no se usan las llaves 
const calcular=(n1,n2)=>{
const resultado=n1*n2
return resultado
}
const mostrar=()=>{
    const dato1=document.getElementById("dato1").value
    const dato2=document.getElementById("dato2").value
    //ejecutando a la funcion 
    const respuesta= calcular(dato1,dato2)
    document.getElementById("h_resultado").textContent=respuesta
}


//encontrar/obtener el boton y guardarlo en la constante 
const boton=document.getElementById("btn_calcular")
//agregamos un evente a escuchar, en este caso un click
boton.addEventListener("click", mostrar)