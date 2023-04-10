import app from "../app";
import connections from "../connection";




//criando template conexão GET
app.get("/", async (req, res) => {
    try {
        const result = await connections("table_name")

        res.status(200)
        .send(result)
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});



//criando template conexão POST
app.post("/", async (req, res) => {
    try {
        const newItem = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        
        await connections("table_name").insert(newItem)

        res.status(200)
        .send("Data was added successfully")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});



//criando template conexão PUT
app.put("/table_name/:id", async (req, res) => {
    try {
        const result = await connections("table_name")
        .update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .where("id", req.body.id
        )

        res.status(200)
        .send("Data was att!")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});



//Criando template conexão DELETE	
app.delete("/table_name/:id", async (req, res) => {
    try {
        await connections("table_name")
        .delete()
        .where("id", req.body.id
        )

        res.status(200)
        .send("Data was deleted!")
    
    } catch (error: any) {
        res.status(400)
        .send(error.sqlMessage || error.message)
    }
});
