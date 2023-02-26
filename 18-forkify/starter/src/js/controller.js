import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

////////////////////////////////////////

// Real app on https://forkify-v2.netlify.app/
// API doc on https://forkify-api.herokuapp.com/v2


const controlRecipes = async function() {
  try {
    const id = window.location.hash.substr(1);
    // console.log(id);
    if (!id) return;
    recipeView.renderSpinner();


    // 1° Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2° Rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    console.log(`${err} 💣💣💣💣`);
    recipeView.renderError();
  }
};

// controlRecipes();


const controlSearchResults = async function() {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // 2. Load search results
    await model.loadSearchResult(query);
    // console.log(model.state.search.results);

    // 3. Rendering result
    // model.state.search.results.map(el => resultsView.render(el));
    resultsView.render(model.state.search.results);
    // resultsView.render(model.state.search.results);

  } catch (err) {
    console.log(`${err} 💣💣💣💣`);
  }
};


// controlSearchResults();

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();


// Parcel function to not refresh the page at each save
// Force refresh of the page (clik button) should be done to take 
// into account code changes.
if (module.hot) {
  module.hot.accept()
}