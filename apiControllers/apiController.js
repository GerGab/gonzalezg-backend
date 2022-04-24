const { products } = require("../dataBases/products.js")

const apiController =  {
    products: async (req, res) => {
        res.json( await products.getAll());
    },
    random: async (req, res) => {
        res.json( await products.getRandom())
    }
}

module.exports = {apiController}