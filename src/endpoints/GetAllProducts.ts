import app from '../index';
import { connections } from '../connect/connect'

//This function lists all products 
export const getAllProduct = app.get("/product", async (req, res) => {
    try {
        const result = await connections("products")

        res.status(200)
        .send(result)
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});

