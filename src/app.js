const express = require('express')
const app = express()
const databaseConnection = require('../config/database')
const productsRoutes = require('./routes/productsRouts')
const path = require('path')
const userRout = require('./routes/userRout')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

databaseConnection.connect()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".ejs")

app.use('/productos', productsRoutes)

app.use('/', userRout)

app.get('/', (req, res)=>{
    res.render('./pages/index',{
        titulo:"index"
    })
})

app.listen(9000, ()=>{
    console.log('Servidor corriendo en 9000')
})