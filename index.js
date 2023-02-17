const express = require('express');
const bodyParser = require('body-parser');
const { addListener } = require('nodemon');
const app = express();




app.get("/users", (request,res) => {
    return res.send({ users })
})

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json()) 

app.get("/login", (req,res) => {
    res.render("login")
})

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/newusers", (req,res) => {
    res.render("newusers")
})


app.listen(3377,() => {console.log('Servidor rodando na porta 3377')})