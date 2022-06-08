export default class Batman{
    constructor(){
      
    }
    async consumir_api(){
        const datos= await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const variable=await datos.json()
        let cajitas=[]
        for (const element of variable.Search) {
            let cajita=`
            <div class="col-lg-3">
            <div class="card" style="width: 18rem;">
                <img src=${element.Poster} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Titulo:${element.Title}</h5>
                    <p class="card-text">Año de lanzamiento:${element.Year}</p>
                </div>
            </div>
            </div>`
            cajitas.push(cajita)
        }
        document.getElementById("row_datos").innerHTML=cajitas.join('')


    }
    
}


