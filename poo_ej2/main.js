import Batman from "./batman.js"
function ejecutar(){
    const batman=new Batman()
    batman.consumir_api()
}
document.getElementById("btn").addEventListener("click",ejecutar)

