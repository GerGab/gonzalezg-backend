const express = require('express')
const {routerApiProducts} = require("./routers/routerApiProducts.js")

// creación de servidor express
const app = express()

//router para productos
app.use("/api/productos",routerApiProducts)


// configuración y encendido del servidor
const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto: ${server.address().port}`)
})

// aviso de error al montar el servidor
server.on("error", error => console.log(`Error en servidor ${error}`))
