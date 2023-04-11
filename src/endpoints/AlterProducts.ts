import app from '../index';
import { connections } from '../connect/connect'

export const alterProduct = app.patch("/product/:id", async (req, res) => {
    try {
        const { id, categories, name, qnty, price } = req.body

        const result = await connections("product")
        .update({ 
            categories, 
            name, 
            qnty, 
            price
        })
        .where(id)

        res.status(200)
        .send("The product was updated")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});
