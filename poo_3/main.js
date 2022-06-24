//dejo configurado el export
import Producto from "./producto.js";


function ejecutar(){
    const guardar=new Producto()
    guardar.consumir_api()
}
ejecutar()