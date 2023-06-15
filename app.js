const express = require("express")
const mime = require("mime")
const fs = require("fs")
const app = express()

app.use(express.json())
app.use(express.static("./public"))

app.post("/login",(req,res)=>{
    let data = req.body
    console.log("data",data)
     

    fs.appendFile('./test.txt',JSON.stringify(data),(err)=>{
        if(err){
            console.log(err)
            return 
        }
    })
    res.json({username: data.emailInput})
})

app.listen(8080,()=>{
    console.log("server has been started")
})