
// objetos de prueba
const object1 = {
    id: 13224,
    title: "Remera",
    price: 450,
    thumbnail: "http://imagen.png"
}
const object2 = {
    id: 332115,
    title: "Camiseta",
    price: 550,
    thumbnail: "http://imagen2.png"
}

//desafio 1
class Container{

    constructor(){
        this.objects = [];
    }

    save(object){
        this.objects.push(object);
    }

    getById(id){
        let object = this.objects.find(item => item.id === id);
        return object===undefined ? null : object // entiendo que podría devolver directamente el objeto y encaso que sea undefined podría seguir aplicando la misma logica pero como la consigna dice explicitamente null lo ajusto.
    }

    getAll(){
        return this.objects
    }

    deleteById(id){
        this.objects = this.objects.filter(item => item.id !== id);
    }

    deleteAll(){
        this.objects = [];
    }
}

// Segmento designado a mostrar la funcionalidad del desafio 1
console.log("==== FUNCIONALIDAD DEL DESAFIO 1=====")
const miContainer = new Container()
miContainer.save(object1)
miContainer.save(object2)
console.log("getById")
console.log(miContainer.getById(13224))
console.log("getById debe dar null")
console.log(miContainer.getById(0))
console.log("getAll")
console.log(miContainer.getAll())
console.log("deleteById")
miContainer.deleteById(332115)
console.log(miContainer.getAll())
console.log("deleteAll")
miContainer.deleteAll()
console.log(miContainer.getAll())
console.log("==================================")
