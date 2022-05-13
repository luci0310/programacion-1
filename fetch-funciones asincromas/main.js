//queda trabajndo en un segundo plano, para ganar tiempo
async function obtener_datos()
{
    //realiza una solicitud htpp a traves del metodo GET
    //es una comunicacion con la API
    //el await es para asegurarse que si no llega toda la informacion de una linea, no pase a la siguiente 
    const datos=await fetch('https://jsonplaceholder.typicode.com/posts')
    //indicando que los datos son un json
    const datos_definitivos=await datos.json()
    //buscando  los datos
    datos_definitivos.forEach(element => {
        console.log(element,title)
    });
}