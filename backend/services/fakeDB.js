const database = {};

/** Adds a recipe to the database.
 *  @param {Object} recipe - The recipe to add. 
 *  @returns {number} The ID of the added recipe. */
export function addRecipe(recipe) {
    const id = Object.keys(database).length;
    database[id] = recipe;
    return id;
}

/** Gets a recipe from the database.
 *  @param {number} id - The ID of the recipe to get.
 *  @returns {Object|undefined} The recipe itself if it exists. */
export function getRecipe(id) {
    return database[id];
}
