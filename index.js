const express = require('express');
const bodyParser = require('body-parser');
const { addListener } = require('nodemon');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json()) 

app.get("/login", (req,res) => {
    res.render("login")
})

app.listen(3377,() => {console.log('App Rodando')})