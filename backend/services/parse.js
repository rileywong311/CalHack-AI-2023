const example = "BEGIN RECIPE\nRECIPE NAME: Monkey Bread\n\nSTEPS:\n1. [PREPARE] a bundt pan by greasing it with non-stick cooking spray.\n2. In a small microwave-safe bowl, [MELT] 1/2 cup of unsalted butter in the microwave for about 30 seconds.\n3. In a separate bowl, combine 1/2 cup of granulated sugar and 1 tablespoon of ground cinnamon and [MIX] well.\n4. [CUT] 4 cans of refrigerated biscuit dough into quarters.\n5. Roll each quarter into a ball and [COAT] them in the melted butter, then in the cinnamon-sugar mixture.\n6. Layer the coated biscuit dough balls in the prepared bundt pan.\n7. In a small saucepan, [MIX] 1 cup of brown sugar and 1/2 cup of unsalted butter over medium heat until fully melted and combined, then pour the mixture over the biscuit dough balls in the bundt pan.\n8. [BAKE] the monkey bread in a preheated oven at 350°F for 35-40 minutes or until golden brown and the biscuits are cooked through.\n9. [INVERT] the monkey bread onto a serving plate and [SERVE] warm.\nEND RECIPE";

/** Parses the raw recipe string into a JavaScript object for export.
 *  @param {string} raw - The raw recipe string. 
 *  @returns {Object} The recipe represented as a JavaScript object. */
function parseRecipe(raw) {
    const lines = example.split("\n").filter(line => line !== "");
    console.log(lines);
    return {}
}

parseRecipe(example);