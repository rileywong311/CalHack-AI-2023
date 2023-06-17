/** Returns a random number IN [min, max].
 *  @param {number} min - The low end. 
 *  @param {number} max - The high end.
 *  @returns {number} The result. */
export function getRandomArbitrary(min, max) { 
    return Math.round(Math.random() * (max - min) + min); 
}
