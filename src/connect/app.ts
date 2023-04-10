import express from 'express';
import cors from 'cors'
import { AddressInfo } from 'net';

const app = express();

app.use(express.json())
app.use(cors());

const server: any = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running on port ${server.address().port}`);
    }else{
        console.error('Server is not running');
    }
})

export default app;
