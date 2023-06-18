import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { addRecipe as add, getRecipe as get } from './services/fakeDB.js';
import { getRecipe, getFixedRecipe } from './services/openAI.js';
import { parseRecipe } from './services/parse.js';

const app = express();
app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan('combined'));

app.get('/api/steps', async (request, response) => {
    const body = request.body;
    if (!body.food) return response.status(400).json({error: 'content missing'});

    const raw = await getRecipe(body.food);
    add(raw);

    const recipe = parseRecipe(raw);
    if (!recipe) return response.status(500).json({error: "GPT could not generate the recipe"});
    return response.json(recipe);
});

app.get('/api/fix', async (request, response) => {
    const body = request.body;
    console.log(body)
    if (body.id === undefined || body.step === undefined) return response.status(400).json({error: 'content missing'});

    if (!get(body.id)) return response.status(404).json({error: "recipe not found"});
    const raw = await getFixedRecipe(get(body.id), body.step);
    console.log(raw);
    add(raw);

    const recipe = parseRecipe(raw);
    if (!recipe) return response.status(500).json({error: "GPT could not generate the recipe"});
    return response.json(recipe);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
