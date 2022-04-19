const calcular=(a1,a2,a3)=>{
    const resultado=parseInt(a1)+parseInt(a2)+parseInt(a3)
    const mensaje=(resultado==180)? "es un triangulo" : "no es un triangulo";
    return resultado+'='+mensaje
}
const mostrar=()=>{

    const a1=document.getElementById("a1").value
    const a2=document.getElementById("a2").value
    const a3=document.getElementById("a3").value

    const respuesta=calcular(a1,a2,a3);
    document.getElementById("h_resultado").textContent=respuesta;
    
}
const boton=document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)