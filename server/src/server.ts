import express from 'express';/*(linha 1)Este é o arquivo principal*/

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Hello World' });
});

app.listen(3333);