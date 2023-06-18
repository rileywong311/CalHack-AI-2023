import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';
import { getPrompt, getFixingPrompt } from './prompt.js';

const configuration = new Configuration({apiKey: process.env.API_KEY});
const openai = new OpenAIApi(configuration);

/** Gets a recipe from ChatGPT.
 *  @param {string} food - The food that the user requested a recipe for.
 *  @returns {Promise<string>} - The output from ChatGPT. */
export async function getRecipe(food) {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{role: "user", content: getPrompt(food)}]
    });
    return chatCompletion.data.choices[0].message.content;
}

/** Fixes a recipe using ChatGPT.
 *  @param {string} recipe - The recipe to fix.
 *  @param {number} step - The step to fix the recipe from.
 *  @returns {Promise<string>} - The output from ChatGPT. */
export async function getFixedRecipe(recipe, step) {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{role: "user", content: getFixingPrompt(recipe, step)}]
    });
    return chatCompletion.data.choices[0].message.content;
}
