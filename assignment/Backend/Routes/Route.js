const express=require("express")
const product=require("../Model/product")
const routes=express.Router()
routes.get('/getprod', async (req, res) => {
    try {
        const page = Number(req.headers.page) || 0;
        const products = await product.find().skip(page * 10).limit(10);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});
module.exports=routes 