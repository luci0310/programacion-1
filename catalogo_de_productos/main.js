async function obtener_catalogo(cat){
    const datos= await fetch('https://fakestoreapi.com/products/category/'+cat)
    const variable=await datos.json()
    let columnas=[]
    variable.forEach(element => {
        let columna=`<div class="col-lg-3">
        <div class="card" style="width: 18rem;">
            <img src=${element.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <h6 class="card-title">${element.title}</h6>
            <a href="#" class="btn btn-primary">$${element.price}</a>
            </div>
        </div>
        </div>`
    columnas.push(columna)
    });
    document.getElementById("row_datos").innerHTML=columnas.join('')
}
obtener_catalogo('jewelery')