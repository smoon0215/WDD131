import recipes from './recipes.mjs';

function searchRecipes(query) {
    const results = [];
    const searchTerm = query.toLowerCase();

    for (const recipe of recipes) {
        if (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) // Search tags as well
        ) {
            results.push(recipe);
        }
    }
    return results;
}

function displayRecipes(recipesToDisplay) {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous content

    if (recipesToDisplay.length === 0) {
        recipeContainer.textContent = 'No recipes found.';
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const recipeHTML = `
            <div class="recipe-item">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <div class="tags">
                    ${recipe.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${Array(recipe.rating).fill('<span aria-hidden="true" class="icon-star">⭐</span>').join('')}
                </div>
            </div>
        `;
        recipeContainer.innerHTML += recipeHTML;
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('query').value;
    const results = searchRecipes(query);
    displayRecipes(results);
});

// Initial display of all recipes (optional)
displayRecipes(recipes);