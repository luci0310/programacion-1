const calcular=(d1)=>{
if(d1>=14 && d1<=32){
    const t1=("temperatura baja")
    return t1
}else if(d1>32 && d1<=68){
    const t3=("temperatura alta")
    return t3
}else if(d1>68 && d1<=96){
    const t4=("temperatura alta")
    return t4
}else{
    const t4=("temperatura desconocida")
    return t4
}
}

const mostrar=()=>{
const dato1=document.getElementById("dato1").value
//ejecutamos la funcion
const respuesta=calcular(dato1)
document.getElementById("h_resultado").textContent=respuesta
}

//encontrar/obtener el boton y guardarlo en la constante
const boton=document.getElementById("btn_calcular")
//agregamos un evente a escuchar, en este caso un click
boton.addEventListener("click", mostrar)