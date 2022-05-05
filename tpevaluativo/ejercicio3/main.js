function calcular(dato1,dato2){
const resultado=Math.pow(dato1,2)+Math.pow(dato2,2)
const resultado2=Math.sqrt(resultado)
return 'el resultado es: '+resultado2
}

function mostrar(){
const dato1=document.getElementById("inp_dato1").value
const dato2=document.getElementById("inp_dato2").value
const respuesta=calcular(dato1,dato2)

document.getElementById("h_resultado").textContent=respuesta
}