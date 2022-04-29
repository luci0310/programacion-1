 function calcular(dato1,dato2,select){
 if(select==1){
    const resta=(dato1-dato2)
    return resta 
}
else if(select==0){
    const suma=parseInt(dato1)+parseInt(dato2)
    return suma
}else if(select==2){
    const division=(dato1/dato2)
    return division
}else if(select==3){
    const multiplicacion=(dato1*dato2)
    return multiplicacion
}
}
 function mostrar(){
    const operacion=document.getElementById("slt_o").value
    const dato1=document.getElementById("inp_dato1").value
    const dato2=document.getElementById("inp_dato2").value
    const resultado=calcular(dato1,dato2,operacion)
    document.getElementById("h2_r").textContent=resultado
}

