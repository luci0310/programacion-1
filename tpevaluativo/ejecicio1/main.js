function calcular(){
    const resultado=document.getElementById("auto").value
    let respuesta= null
    if(resultado==1750000){
    respuesta=(1750000-((15/100)*1750000))
    //fort ka
    }
    else if(resultado==1950000){
    respuesta=(1950000-((5/100)*1950000))
    //ford fiesta
    }
    else if(resultado==2560000){
    respuesta=(2560000-((10/100)*2560000))
    //ford focus
    }
document.getElementById("d_resultado").textContent=respuesta
}
const boton=document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)
