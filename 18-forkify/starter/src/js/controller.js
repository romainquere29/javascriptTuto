import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
}

// controlRecipes();


// if (module.hot) {
//   module.hot.accept(() => {
//     location.reload()
//   })
// }

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}

init();