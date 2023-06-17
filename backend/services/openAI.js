import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({apiKey: process.env.API_KEY});
const openai = new OpenAIApi(configuration);

/** Gets a response from ChatGPT given a prompt.
 *  @param {string} prompt - The prompt.
 *  @returns {Promise<string>} - The PROMISE of a string so you better await that bih. */
export async function getCompletion(prompt) {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
    });
    return chatCompletion.data.choices[0].message.content;
}
