//formas de buscar el id
function sumar(){
    //forma 1
    //const dato1=document.querySelector("#inp_dato1").value
    //const dato2=document.querySelector("#inp_dato2").value

    //forma 2
    const dato1=document.getElementById("inp_dato1").value
    const dato2=document.getElementById("inp_dato2").value
    //es general
    const resultado=parseInt(dato1)+parseInt(dato2)
    alert(resultado)
}