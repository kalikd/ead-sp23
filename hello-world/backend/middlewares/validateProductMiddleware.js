module.exports = (req, res, next)=>{
    const { name, price, qty, manufacturer } = req.body
    if(!name || !price || !qty || !manufacturer)
        return res.redirect('/product/save');
    next()
    
}