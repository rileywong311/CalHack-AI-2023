import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { getCompletion } from './services/openAI.js';

const app = express();
app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan('combined'));

app.get('/chatgpt', async (request, response) => response.send(`
    <p>CHATGP SAYS ${await getCompletion("Hello world!")}</p>
`));

/** REFERENCE FOR USING A BODY
 * app.post('/api/persons', (request, response) => {
    const body = request.body;
    if (!body.name || !body.number) return response.status(400).json({error: 'content missing'});
    if (persons.find(person => person.name === body.name)) return response.status(400).json({error: 'names must be unique'});

    const person = { id: getRandomArbitrary(100, 500000), name: body.name, number: body.number };
    persons = persons.concat(persons);
    response.json(person);
}); */

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
