
function crear_catalogo(){
    let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))

    let columnas=[]

    lista_producto.forEach(element => {

        let descripcion_cat = null

        switch (element.categoria) {
            case 0:
              descripcion_cat = 'Aromatizador de telas y ambiente en 120ml'
              break;
            case 1:
                descripcion_cat = 'Aromatizador de telas y ambiente en 500ml'
              break;
            case 2:
                descripcion_cat = 'Aerosol en 270ml'
              break;
            case 3:
                descripcion_cat = 'Perfumes personales femeninos'
              break;
            case 4:
                descripcion_cat='Perfumes personales  masculinos'
             break;
            default:
                descripcion_cat='No tenemos disponible'
        }

        let columna=
        `<div class="col-lg-8 mb-3">
        <p class="card-title"></p>
        <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <img src=${element.imagen} class="card-img-top"  height="200" width="200">
        <div class="card-body">
        <p class="card-title"> Descripcion: ${element.descripcion}</p>
        <p class="card-title">Aroma: ${element.aroma}</p>
        <p class="card-title"> Precio: $${element.precio}</p>
        <p class="card-title"> Categoria: ${descripcion_cat}</p>
        <a href="#" class="btn btn-primary" id="btn_comprar">Comprar</a>
        </div>`
        columnas.push(columna)

    });

    document.getElementById("row_datos").innerHTML=columnas.join('')
}

crear_catalogo()

function crear_tabla()
{
    let lista_producto=JSON.parse(localStorage.getItem("Perfumes"))
    
    let filas=[]

    lista_producto.forEach(element => {
        let fila=
        `<tr>
        <td>${element.descripcion}</td>
        <td></td>
        <td>$${element.precio}</td>
        </tr>
        `
        filas.push(fila)
    });
    document.getElementById("body2").innerHTML=filas.join('')
}
document.getElementById("btn_comprar").addEventListener("click",crear_tabla)


 
function saber_total(){

    
    const truck_modal = document.querySelector('#mymodal2');
    const modal = bootstrap.Modal.getInstance(truck_modal);    
    modal.hide()
}
document.getElementById("btn_finalizar").addEventListener("click",saber_total)

