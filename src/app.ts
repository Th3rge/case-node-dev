import express from 'express';
import cors from 'cors'
import { AddressInfo } from 'net';

//Adcionando o express em uma constate
const app = express();

//Chamando o express e o cors
app.use(express.json())
app.use(cors());

//Montando o servidor
const server: any = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running on port ${server.address().port}`);
    }else{
        console.error('Server is not running');
    }
})

export default app;
