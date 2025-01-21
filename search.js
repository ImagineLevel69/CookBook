document.getElementById('search-btn').addEventListener('click', function () {
    var searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
    var searchInput = document.getElementById('search-input');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        filterRecipes('');
    }
});

document.getElementById('search-input').addEventListener('input', function () {
    var query = this.value.toLowerCase();
    filterRecipes(query);
});

function filterRecipes(query) {
    var recipes = document.querySelectorAll('#recipe-list li');
    recipes.forEach(function (recipe) {
        var text = recipe.textContent.toLowerCase();
        if (text.includes(query)) {
            recipe.style.display = '';
        } else {
            recipe.style.display = 'none';
        }
    });
}
