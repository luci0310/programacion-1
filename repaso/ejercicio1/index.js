function calcular(dato1){
    const resultado=(dato1*1.8)+32
    return ('F°=')+resultado 
}
function visualizar(){
    const dato1=document.getElementById("dato1").value
    const respuesta=calcular(dato1)
    document.getElementById("d_resultado").textContent=respuesta
}
