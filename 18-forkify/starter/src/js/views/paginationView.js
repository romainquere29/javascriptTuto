import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length/this._data.resultsPerPage);
        const page = Number(this._data.page);
        // Page 1, and there are others pages
        if (page === 1 && numPages > 1) {
            return `
            <button data-goto="${page+1}" class="btn--inline pagination__btn--next">
                <span>Page ${page+1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`;
        }

        // Page 1, and there NO are others pages
        if (page === 1 && numPages === 1) {
            return '';
        }

        // Page 2 to N-1
        if (1 < page && page < numPages) {
            return `
            <button data-goto="${page-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page-1}</span>
            </button>
            <button data-goto="${page+1}" class="btn--inline pagination__btn--next">
                <span>Page ${page+1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`;
        }

        // Last page
        if (page  === numPages) {
            return `
            <button data-goto="${page-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page-1}</span>
            </button>`;
        }


        return `<button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page 1</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    };

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn =e.target.closest('.btn--inline');
            if (!btn) return;
            const targetPage = btn.getAttribute('data-goto');
            // const targetPage = btn.dataset.goto;
            // data.page += 1;
            handler(targetPage);
        });
    };
}

export default new PaginationView();