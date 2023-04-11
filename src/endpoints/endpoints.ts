import app from '../index';
import token from '../token/token'
import { connections } from '../connect/connect'

app.use(token)



/*
GET FUNCTIONS
*/



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


//this function return just a specific product
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



/*
POST FUNCTIONS
*/

//CREATES A NEW PRODUCT
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

//CREATES A TOKEN
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


/*
PATCH FUNCTIONS
*/

//Altering a product
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


/*
DELETE FUNCTIONS
*/

//This delete a product	
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
