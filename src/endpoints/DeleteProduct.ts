import app from '../index';
import { connections } from '../connect/connect'

export const deleteProduct = app.delete("/product/:id", async (req, res) => {
    try {

        const { id } = req.body
        
        await connections("products")
        .delete()
        .where(id)

        res.status(200)
        .send("The product was deleted!")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});
