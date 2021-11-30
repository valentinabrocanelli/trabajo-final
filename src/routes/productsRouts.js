const express = require('express')

const {getAllProducts,  getAddProduct, getForm} = require('../controllers/productsControllers')

const productsRoutes = express.Router()

productsRoutes.get('/allProducts', getAllProducts)
productsRoutes.get('/addProduct', getForm)


productsRoutes.post("/addProduct", getAddProduct)
module.exports = productsRoutes