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
            -el setitem crea un item(si es q no hay)
            -el json.stringify es para pasar los datos a json
            */

            localStorage.setItem("Productos", JSON.stringify(lista_productos))
        }
    }
    obtener_productos(){
        /*
        Recolectamos todos los productos alojados en el item "productos"
        que estan en notacion JSON. Debemos convertirlo en una expresion
        nativa de Javascript (es decir, hacemos un JSON.pasrse())
        */
       let lista_productos= JSON.parse(localStorage.getItem("Productos" ))

       let filas=[]
       lista_productos.forEach((element,index) => {
           let fila=`
           <tr>
           <td>${index+1}</td>
           <td>${element.descripcion}</td>
           <td>${element.precio}</td>
           <td>${element.categoria}</td>
           </tr>`   
           filas.push(fila)
       });
       document.getElementById("body").innerHTML=filas.join('')
    }
}