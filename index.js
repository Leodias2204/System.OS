const express = require('express');
const bodyParser = require('body-parser');
const { addListener } = require('nodemon');
const app = express();
const cors = require("cors")
const authMiddleware = require('./auth-middleware');
const firebase = require('./firebase/index');


app.use(cors())

const users = [
    { id: 1, name: "Leonardo Dias",email: "leonardodmonteiro@hotmail.com"},
    { id: 2, name: "Leandro Paiva", email: "leandropaiva73@gmail.com"},
    { id: 3, name: "Joel Nunes", email: "joelnunes@gmail.com"},
]

app.use("/", authMiddleware)

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


app.listen(3377,() => {console.log('Servidor rodando na porta 3377')})