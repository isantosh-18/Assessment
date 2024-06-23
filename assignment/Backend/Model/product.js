const mongoose=require("mongoose")

const ProdSchema=mongoose.Schema({
    "id": Number,
    "title":String,
    "price":Number,
    "description":String,
    "category":String,
    "image":String,
    "sold":Boolean,
    "dateOfSale":String
})
module.exports=mongoose.model("products",ProdSchema)