// importación de libreria fs
const fs = require('fs');
// definir el archivo del desafio 2
const file = "./productos.txt"

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

//desafio 2
class fileContainer{

    constructor(file){
        this.file = file;
    }

    async save(object){
        let objects = await this.readFromFile();
        objects.push(object);
        await this.writeInFile(objects)
    }

    async getById(id){
        let objects = await this.readFromFile()
        let object = objects.find(object => object.id === id)
        return object===undefined ? null : object  // entiendo que podría devolver directamente el objeto y encaso que sea undefined podría seguir aplicando la misma logica pero como la consigna dice explicitamente null lo ajusto.
    }

    async getAll(){
        let objects = await this.readFromFile()
        return objects
    }

    async deleteById(id){
        const objects =  await this.readFromFile()
        const filterObjects = objects.filter(item => item.id !== id);
        await this.writeInFile(filterObjects)
    }

    async deleteAll(){
        await this.writeInFile([])
    }

    async writeInFile(content){
        try{
            await fs.promises.writeFile(this.file,JSON.stringify(content,null,2))
        }
        catch(err){
            console.log(`Error en escritura: ${err}`)
        }
    }

    async readFromFile(){
        try{
            let content = await fs.promises.readFile(this.file)
            return JSON.parse(content)
        }
        catch(err){
            console.log(`Error en lectura: ${err}`)
            return []
        }
    }
}

// Segmento designado a mostrar la funcionalidad del desafio 2
console.log("==== FUNCIONALIDAD DEL DESAFIO 2=====")
const miContainer = new fileContainer(file)
const test = (async ()=>{
    await miContainer.save(object1)
    await miContainer.save(object2)
    console.log("getById: ", await miContainer.getById(13224))
    console.log("getById debe dar null: ",await miContainer.getById(0))
    console.log("getAll: ",await miContainer.getAll())
    console.log("deleteById:")
    await miContainer.deleteById(332115)
    console.log( await miContainer.getAll())
    console.log("deleteAll:")
    await miContainer.deleteAll()
    console.log( await miContainer.getAll())
})()
console.log("==================================")







