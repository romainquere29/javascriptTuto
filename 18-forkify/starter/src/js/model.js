import {API_URL, RES_PER_PAGE} from './config.js';
import {getJSON} from './helpers.js';


export const state = {
    recipe : {},
    search : {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
        const {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients, 
        }
        // console.log(state.recipe);   
    } catch (err) {
        console.log(`${err} 💣💣💣💣`);
        throw err;
    }
};

export const loadSearchResult = async function(query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}\?search\=${query}`);
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title
            };
        })
        // console.log(recipes);
    } catch (err) {
        console.log(`${err} 💣💣💣💣`);
        throw err;
    }
}

export const getSearchResultsPage = function(page = 1) {
    // return state.search.results.slice(0,10) for page 1
    // return state.search.results.slice(10,20) for page 2
    state.search.page = page;
    const start = (page-1)*state.search.resultsPerPage;
    const end = page*state.search.resultsPerPage;
    return state.search.results.slice(start,end);
}


export const updateServings = function(newServings) {
    state.recipe.ingredients.map(el => el.quantity=el.quantity*newServings/state.recipe.servings);
    state.recipe.servings = newServings;
}