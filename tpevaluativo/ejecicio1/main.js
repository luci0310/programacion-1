function calculo(auto){
    if(auto==1750000){
        const r1=(1750000*5/100)
        return r1
    }
    else if(auto==1950000){
        const r2=(10/100*1950000)
        return r2
    }else if(auto==2560000){
        const r3=(15/100*2560000)
        return r3
    }
}
function mostrar(){
    const auto=document.getElementById("auto").value
    const resultado=calculo(auto)
    document.getElementById("h2_r").textContent=resultado
}