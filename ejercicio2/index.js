function calculo(){
    const number1=prompt('ingrese la base menor')
    const number2=prompt('ingrese la base mayor')
    const number3=prompt('ingrese la altura')
    const resultado=parseInt(number1)+parseInt(number2)*parseInt(number3)/2
    return resultado
}
function mostrar(){
    const respuesta=calculo()
    alert(respuesta)
}
