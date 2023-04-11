import app from '../index';
import { connections } from '../connect/connect'

export const getProduct = app.get("/product/:id", async (req, res) => {
    try {
        const result = await connections("product")

        res.status(200)
        .send(result)
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});