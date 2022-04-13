
const calcular = (d1,d2,d3)=>{
    const resultado1= Math.pow(d2,2)-(4*d1*d3)
    const raiz=Math.sqrt(resultado1)
    const b1=-d2+raiz
    const b2=-d2-raiz
    const resultado2=b2/(2*d1)
    const resultado3=b1/(2*d1)
    return 'Raiz 1 = '+resultado2+' Raiz 2 = '+resultado3
}

const mostrar = ()=>{
    const dato1=document.getElementById("dato1").value
    const dato2=document.getElementById("dato2").value
    const dato3=document.getElementById("dato3").value
    const respuesta=calcular(dato1,dato2,dato3);
    document.getElementById("d_resultado").textContent=respuesta
}
const boton=document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)