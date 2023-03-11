import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query. Please try another one!';
    _message = '';

    _generateMarkup() {
        const id = window.location.hash.slice(1);
        console.log(id);

        let markup = '';
        markup = this._data.map(el => 
            `
            <li class="preview">
                <a class="preview__link ${el.id === id ? 'preview__link--active' : ''}" href="#${el.id}">
                <figure class="preview__fig">
                    <img src="${el.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${el.title}</h4>
                    <p class="preview__publisher">${el.publisher}</p>
                    <div class="preview__user-generated">
                    <svg>
                        <use href="${icons}#icon-user"></use>
                    </svg>
                    </div>
                </div>
                </a>
            </li>
        `).join('');
    return markup;
    }

};

export default new ResultsView();