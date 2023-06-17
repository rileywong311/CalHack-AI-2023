import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan('combined'));

function getRandomArbitrary(min, max) { return Math.round(Math.random() * (max - min) + min); }

let persons = [
    { "id": 1, "name": "Arto Hellas", "number": "040-123456" },
    { "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523" },
    { "id": 3, "name": "Dan Abramov", "number": "12-43-234345" },
    { "id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122" }
]

app.get('/info', (request, response) => response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${Date()}</p>
`));

app.get('/api/persons', (request, response) => response.json(persons));
app.post('/api/persons', (request, response) => {
    const body = request.body;
    if (!body.name || !body.number) return response.status(400).json({error: 'content missing'});
    if (persons.find(person => person.name === body.name)) return response.status(400).json({error: 'names must be unique'});

    const person = { id: getRandomArbitrary(100, 500000), name: body.name, number: body.number };
    persons = persons.concat(persons);
    response.json(person);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);

    if (person) response.json(person);
    else response.status(404).end();
});
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
