const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes/routes')
const cors = require("cors")
const port = 8080
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/",router);

app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})