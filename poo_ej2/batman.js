export default class Batman{
    constructor(){
      
    }
    async consumir_api(){
        const datos= await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const variable=await datos.json()

        for (const element of variable.Search) {
            console.log( `
            Title:${element.Title}
            Year:${element.Year}
            Poster:${element.Poster}
            `)
        }
        
    }
}