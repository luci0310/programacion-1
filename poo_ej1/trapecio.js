//siempre va con mayuscula la primera letra
export  default class Trapecio{
    //metodo propio de la clase, se dispara cuando hay una instancia(forma parte de una clase)
    //receptor de datos 
    constructor(bma,bme,h){
        this.base_mayor=bma
        this.base_menor=bme
        this.altura=h
    }

    //creamos un nuevo metodo
    calcular_area_trap(){
        const resultado=((Number(this.base_mayor)+Number(this.base_menor))/2)*this.altura
        return resultado
    }

}