function calcular_area(area){
const resultado=Math.PI*Math.pow(area,2)
return resultado 
}
function mostrar(){
const area=document.getElementById("inp_radio").value

const respuesta=calcular_area(area)

document.getElementById("r_resultado").textContent=respuesta
}