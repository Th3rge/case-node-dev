import app from '../index';
import { connections } from '../connect/connect'
import token from '../token/token'


export const createToken = app.post("/auth/login", async (req, res) => {
    try {
        const newToken = await token()    
        
        await connections("admin").insert(newToken)

        res.status(200)
        .send("The token was created")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});
