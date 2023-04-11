import app from '../index';
import { connections } from '../connect/connect'

export const createNewProduct = app.post("/product", async (req, res) => {
    try {
        const {id, categories, name, qnty, price } = req.body

        const newProduct = {
            id,
            categories,
            name,
            qnty,
            price
        }
        
        await connections("products").insert(newProduct)

        res.status(200)
        .send("The new product was added")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});