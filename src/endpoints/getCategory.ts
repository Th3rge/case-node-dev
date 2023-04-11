import app from '../index';
import token from '../token/token'
import { connections } from '../connect/connect'
//This function lists all products's category


export const getCategory = app.get("/category", async (req, res) => {
    try {
        const result = await connections("products")

        res.status(200)
        .send(result)
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});
