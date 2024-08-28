const express =require('express')
const app = express()
app.get("/api/get",(req,res)=>{
    res.send({message:'hello back to nodejs'})
})

app.listen(7777,()=>{
    console.log('listioning to 7777')
})