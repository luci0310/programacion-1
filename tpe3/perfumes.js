export default class Perfumes{

    constructor(d,p,i,a,c){
        this.descripcion=d
        this.precio=p
        this.imagen=i
        this.aroma=a
        this.categoria=c
    }

    guardar_producto()
    {
        let nuevo_producto={
            descripcion:this.descripcion,
            precio:this.precio,
            imagen:this.imagen,
            aroma:this.aroma,
            categoria:this.categoria
        }
        if("Perfumes" in localStorage){
            let lista_producto= JSON.parse(localStorage.getItem("Perfumes"))
            lista_producto.push(nuevo_producto)
            localStorage.setItem("Perfumes", JSON.stringify(lista_producto))
        }else{
            let lista_producto=[]
            lista_producto.push(nuevo_producto)
            localStorage.setItem("Perfumes",JSON.stringify(lista_producto))
        }
        this.obtener_producto()

        this.vaciar_producto()
    }

    obtener_producto()
    {
        let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))

        let filas=[]
        lista_producto.forEach((element,index) => {
            let fila=`
            <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td>
                <img src="${element.imagen}" alt="" style="width:7rem">
                </td>
                <td>${element.aroma}</td>
                <td>${element.categoria}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" id="btn_guardar" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"></i>
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="editar(${index})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
            </tr>`  
            filas.push(fila)
        });
        document.getElementById("body").innerHTML=filas.join('')
    }

    eliminar_producto(indice)
    {
        let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))

        lista_producto.splice(indice,1)

        localStorage.setItem("Perfumes", JSON.stringify(lista_producto))

        this.obtener_producto()

        
    }

    actualizar_producto()
    {
        let indice=localStorage.getItem("indice")

        let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))

        lista_producto[indice].descripcion=document.getElementById("descripcion").value
        lista_producto[indice].precio=document.getElementById("precio").value
        lista_producto[indice].imagen=document.getElementById("imagen").value
        lista_producto[indice].aroma=document.getElementById("aroma").value
        lista_producto[indice].categoria=document.getElementById("categoria").value

        localStorage.setItem("Perfumes", JSON.stringify(lista_producto))

        this.obtener_producto()

        document.getElementById("btn_guardar").style.display="none"

        document.getElementById("btn_actualizar").style.display="block"

        this.vaciar_producto()

        document.getElementById("btn_actualizar").style.display="none"

        document.getElementById("btn_guardar").style.display="block"

    }

    vaciar_producto()
    {
        document.getElementById("form_producto").reset()
    }
}