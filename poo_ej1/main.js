//se utiliza cuando el trabajo es muy grande y se separa por partes(secotirzar,clases,tematicas)
//metodos y atributos
//cuando en el main tiene  un modulo no se puede usar el onclick, si o si con un id 
//hay que declarar el import en los dos js y en html con un type import 
import Trapecio from "./trapecio.js";

function ejecutar(){

    const base_mayor= document.getElementById("inp_bma").value
    const base_menor=document.getElementById("inp_bme").value
    const altura= document.getElementById("inp_h").value

    //creamos la instancia de la clase trapecio 
    const trapecio=new Trapecio(base_mayor,base_menor,altura)
    //mediante el uso de la instancia invocamos/ejecutamos el metodo 
    const respuesta=trapecio.calcular_area_trap()
    document.getElementById("resultado").textContent='Area de trapecio:'+respuesta 
}

document.getElementById("btn").addEventListener("click",ejecutar)