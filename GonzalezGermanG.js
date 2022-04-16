
class Container{

    constructor(){
        this.objects = [];
        this.id = 0;
    }

    save(object){
        this.objects.push({id:this.id,object:object});
        this.id +=1;
    }

    getById(id){
        return this.objects[id].object
    }

    getAll(){
        return this.objects.map(item => item.object)
    }

    deleteById(id){
        this.objects = this.objects.filter(item => item.id != id)
    }

    deleteAll(){
        this.objects = []
    }
}

// Segmento designado a mostrar la funcionalidad de la clase creada

const miContainer = new Container()
miContainer.save({
    id: 13224,
    title: "Remera",
    price: 450,
    thumbnail: "http://imagen.png"
})
miContainer.save({
    id: 332115,
    title: "Camiseta",
    price: 550,
    thumbnail: "http://imagen2.png"
})
console.log("getById")
console.log(miContainer.getById(0))
console.log("getAll")
console.log(miContainer.getAll())
console.log("deleteById")
miContainer.deleteById(1)
console.log(miContainer.getAll())
console.log("deleteAll")
miContainer.deleteAll()
console.log(miContainer.getAll())