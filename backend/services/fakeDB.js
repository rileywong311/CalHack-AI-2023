const database = {};

/** Adds a recipe to the database.
 *  @param {string} recipe - The recipe to add. 
 *  @returns {number} The ID of the added recipe. */
export function addRecipe(recipe) {
    const id = Object.keys(database).length;
    database[id] = recipe;
    return id;
}

/** Adds a recipe to the database.
 *  @param {string} recipe - The recipe to add. 
 *  @returns {number} The ID of the added recipe. */
export function addRecipe2(recipe) {
    database[0] = recipe;
    return 0;
}

/** Gets a recipe from the database.
 *  @param {number} id - The ID of the recipe to get.
 *  @returns {string|undefined} The recipe itself if it exists. */
export function getRecipe(id) {
    return database[id];
}
