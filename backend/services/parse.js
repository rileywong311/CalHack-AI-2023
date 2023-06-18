/** Parses the raw recipe string into a JavaScript object for export.
 *  @param {string} raw - The raw recipe string. 
 *  @returns {Object} The recipe represented as a JavaScript object. */
export function parseRecipe(raw) {
    const lines = raw.split("\n").filter(line => line !== "");
    if (lines.shift() !== "BEGIN RECIPE") return undefined;
    const name = lines.shift().slice(13);
    if (lines.shift() !== "STEPS:") return undefined;

    const steps = [];
    for (let current = lines.shift(); current !== "END RECIPE"; current = lines.shift()) {
        const words = current.split(" ");
        current = lines.shift();
        const step = { category: words[1], time: words[2], description: current };
        steps.push(step);
    }    
    return { name, steps };
}
