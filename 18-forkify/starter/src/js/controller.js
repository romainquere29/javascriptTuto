import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import paginationView from './views/paginationView.js';


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

    // 0° Result view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    bookmarksView.update(model.state.bookmarks);

    // 1° Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2° Rendering recipe
    recipeView.render(model.state.recipe);

    // controlServings();
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
    resultsView.render(model.getSearchResultsPage(model.state.search.page));

    // 4. Rendering initial pagination buttons
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(`${err} 💣💣💣💣`);
  }
};


const controlPagination = function(page) {
  // 1. Rendering new result
  resultsView.render(model.getSearchResultsPage(page));

  // 2. Rendering new buttons
  paginationView.render(model.state.search);
}


const controlServings = function(newServings) {
  // Update the recipe servings (in state)  
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function() {
  // Add or remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update Recipe view
  recipeView.update(model.state.recipe);

  //Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
}


const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks);
}

const init = function() {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}

init();


// Parcel function to not refresh the page at each save
// Force refresh of the page (clik button) should be done to take 
// into account code changes.
// if (module.hot) {
//   module.hot.accept()
// }