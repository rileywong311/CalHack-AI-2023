import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { getCompletion } from './services/openAI.js';

const app = express();
app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan('combined'));

const recipes = {};

app.get('/api/test', async (request, response) => {
    return response.json({content: await getCompletion("Hello, world!")})
});

app.get('/api/steps', async (request, response) => {
    const body = request.body;
    if (!body.food) return response.status(400).json({error: 'content missing'});
    
    // 1) Prompt GPT with recipes
    // 2) Mangle it into a readable JSON for the frontend
    // 3) Add recipe to the recipes list for future retrieval
    // 4) PROFIT!

    return response.json({})
});

app.get('/api/fix', async (request, response) => {
    const body = request.body;
    if (!body.id || !body.step || !body.reason) return response.status(400).json({error: 'content missing'});

    // 1) Prompt GPT with the recipe retrieved from ID along with messed up step and reason
    // 2) Get its new recipe and update the old recipe
    // 3) PROFIT!

    return response.json({})
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
