const {Router} = require("express")
const express = require("express")
const { apiController  } = require('../apiControllers/apiController.js')
const routerApiProducts = new Router()
const {addId,completeId} = require("../middlewares/productMware.js")

// middlewares para manejo de peticiones
routerApiProducts.use(express.json())
routerApiProducts.use(express.urlencoded({extended:true}))

// routeo a apiController
routerApiProducts.get("/",apiController.getProducts)
routerApiProducts.get("/:idProduct",apiController.getProductId)
routerApiProducts.post("/",addId,apiController.postProduct)
routerApiProducts.put("/:idProduct",completeId,apiController.putProduct)
routerApiProducts.delete("/:idProduct",apiController.delProduct)

// exportación del modulo
module.exports = {routerApiProducts}