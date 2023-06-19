const express = require('express');
const path = require('path');
const validateProductMiddleware = require('./middlewares/validateProductMiddleware')

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://admin:pass123@localhost:6000/ead", { useNewUrlParser: true });

const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:pass123@localhost:6000/?authMechanism=DEFAULT', {dbName: 'ead'})
.then(function(){
    console.log('Connected')
})
.catch(function(err){
    console.log(JSON.stringify(err))
})

//const bodyParser = require('body-parser');
const Product  = require('./models/Product');

const app = express();

//app.use(express.json()); //app.use(bodyParser.json()); 

app.use(express.urlencoded()) //app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', { name: "KD" })
});

app.post('/product/save',validateProductMiddleware, async (req, res) => {
    console.log(req.body)
    const product = await Product.create(req.body);
    if (!product) {
      return res.redirect('/product/save');
    }
    res.redirect('/products');
})

app.get('/product/save', function(req, res) {
    res.render('newProduct');
})

app.get('/product/:pid', async function(req, res) {
    const product = await Product.findById(req?.params?.pid)
    res.render('product-details', { product });
})

app.get('/products', async function(req, res) {
    const products =  await Product.find();
    res.render('products', {products});
    // res.json(products);
})

app.get('/about', (req, res) => {
    const products = [
        { name: "Macbook Pro", price: 3500 },
        { name: "Nestle Water", price: 80 },
        { name: "Milo", price: 100 }
    ]
    res.render('about', { products })
});

app.post('/student/save', (req, res) => {
    res.json(req.body)
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "pages","notfound.html"))
// });

app.use('*', function(req, res) {
   res.render('notfound')
})





app.listen('3005', function(){
    console.log('app listening on port 3005!');
})