const OpenAI = require('openai-api');

/** Gets a response from ChatGPT given a prompt.
 *  @param {*} prompt - The prompt.
 *  @returns {Promise<string>} - The PROMISE of a string so you better await that bih. */
async function getCompletion(prompt) {
    const body = {
        engine: 'gpt-3.5-turbo',
        prompt: prompt,
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    };
}