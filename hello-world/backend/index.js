const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', { name: "KD" })
});

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