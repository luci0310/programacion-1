//dejo configurado el export
export default class Producto{
    //creo constructor
    constructor(d,p,c){
        this.descripcion=d
        this.precio=p
        this.categoria=c
    }

    //creo metodo 
    guardar_producto(){
       let nuevo_producto={
           descripcion:this.descripcion,
           precio:this.precio,
           categoria:this.categoria
       }
       if("Productos" in localStorage){
           //convertimos el JSON(que fuimos a buscar al storag) en una expresion nativa en javascript
            let lista_productos=JSON.parse( localStorage.getItem("Productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("Productos",JSON.stringify(lista_productos))
       }else{
            let lista_productos=[]
            lista_productos.push(nuevo_producto)

            /*
            -guardar en localStorage
            -el setitem crea(si es q no hay)
            -el json.stringify es para pasar los datos a json
            */

            localStorage.setItem("Productos", JSON.stringify(lista_productos))
        }
    }
    obtener_productos(){
        
    }
}