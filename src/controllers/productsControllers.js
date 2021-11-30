const databaseConnection = require("../../config/database")


const getForm = (req, res) => {
    res.render('pages/addproducts', {
        titulo: "Producto",
        item1: 'nada',
        item2: 'nada',
        item3: 'activo',
        item4: 'nada'
    })
}
const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM renova", (error, data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/products',{
                titulo:"Compra",
                products: data,
                item1: 'nada',
                item2: 'activo',
                item3: 'nada',
                item4: 'nada'})
        }
    })
}


//const getAddProduct = (req, res)=>{
   // res.render('pages/addproducts',{
   //     titulo:"Agregar",
    //    item1: 'nada',
      //  item2: 'nada',
       // item3: 'activo',
     //   item4: 'nada'})
//}

const getAddProduct = (req, res) => {
    
    const { name, marca, price, description, meses_uso, usuario } = req.body
    //res.send(name + ' ' + category + ' ' + price + ' ' + description + ' ' + stock)
    databaseConnection.query("INSERT INTO renova (name, marca, price, description, meses_uso, usuario) VALUES(?,?,?,?,?,?)", [name, marca, 
        parseFloat(price), description, parseInt(meses_uso), usuario], (error, data) => {
            if(error){
                console.log(error)
            }else{
                res.redirect("/")
                console.log('producto agregado')
            }
    })
}

module.exports = {getAllProducts, getAddProduct, getForm}
