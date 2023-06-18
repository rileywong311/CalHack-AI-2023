import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { addRecipe2 as add, getRecipe as get } from './services/fakeDB.js';
import { getRecipe, getExplanation } from './services/openAI.js';
import { parseRecipe } from './services/parse.js';

const app = express();
app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan('combined'));

app.post('/api/steps', async (request, response) => {
    console.log("Serving /api/steps");
    const body = request.body;
    if (!body.food) return response.status(400).json({error: 'content missing'});

    const raw = await getRecipe(body.food);
    add(raw);

    const recipe = parseRecipe(raw);
    if (!recipe) return response.status(500).json({error: "GPT could not generate the recipe"});
    return response.json(recipe);
});

app.post('/api/explain', async (request, response) => {
    console.log("Serving /api/explain");
    const body = request.body;
    if (body.id === undefined || body.question === undefined) return response.status(400).json({error: 'content missing'});

    if (!get(body.id)) return response.status(404).json({error: "recipe not found"});
    const content = await getExplanation(get(body.id), body.question);
    return response.json({content});
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
