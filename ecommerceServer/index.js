const express = require('express')
const app = express()
const cors = require('cors')
const dataService = require('./services/dataService')
app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.json())
app.listen(3000,()=>{
    console.log("Server started at port 3000");
})
app.get('/allProducts',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/menProducts',(req,res)=>{
    dataService.getMenproduct()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/womenProducts',(req,res)=>{
    dataService.getwomenproduct()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


