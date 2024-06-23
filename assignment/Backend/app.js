const express=require("express")
const routes = require("./Routes/Route")
const  mongoose= require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
async function server(){
    await mongoose.connect("mongodb://127.0.0.1:27017/app")
    app.use(routes)
}
server()


app.use(routes)

app.listen(3000,(req,res)=>{
    
   
})
