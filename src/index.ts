import app from './app';
import connection from './connection';



//Criando modelo de endpoint GET, aguarando as configurações com o Banco de Dados
//Por enquanto são apenas "lorem", falta nomear corretamente
app.get('/', async (req, res) => {
    try {
        const result = await connection("table_name")
        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
});


//Criando modelo de endpoint POST, aguarando as configurações com o Banco de Dados
//Por enquanto são apenas "lorem", falta nomear corretamente
app.post('/food_page', async (req, res) => {
    
    try {
        
            const [name, price, restaurant, address] = req.body;
        
            const food = {
                name,
                price,
                restaurant,
                address
            }
        
            await connection("food_table")
            .insert(food)

            res.status(200)
            .send("Data sended!");
        
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }

    
});


//Criando modelo de endpoint PUT, aguarando as configurações com o Banco de Dados
//Por enquanto são apenas "lorem", falta nomear corretamente

app.put('/food_table/:id', async(req, res) => {
    try {
        await connection("food_table").update({
            name: req.body.name,
            price: req.body.price,
            restaurant: req.body.restaurant,
            address: req.body.address
        })
        .where({ id: req.params.id }) //onde  atualizar

        res.status(200).send("Data Att");
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})


//Criando modelo de endpoint DELETE, aguarando as configurações com o Banco de Dados
//Por enquanto são apenas "lorem", falta nomear corretamente

app.delete('/food_table/:id', async(req, res) => {
    try {
        await connection("food_table")
        .delete()
        .where({ id: req.params.id }) //onde atualizar

        res.status(200).send("Data Deleted");
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})