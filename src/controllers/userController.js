const getUser = (req, res)=>{
    res.render('pages/user',{
        titulo:"Usuario", 
        item1: 'nada',
        item2: 'nada',
        item3: 'nada',
        item4: 'activo'})
}

module.exports = getUser