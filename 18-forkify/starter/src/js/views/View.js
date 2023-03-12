import icons from 'url:../../img/icons.svg';

//Parent class - we don't create new instance
export default class View {
    _data;

    render(data, render = true) {
        if(!data || (Array.isArray(data) && data.length === 0)) 
            return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();

        if (!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    };

    update(data) {
      this._data = data;
      const newMarkup = this._generateMarkup();
      // Converting newMarkup string to DOM objects
      const newDOM = document.createRange().createContextualFragment(newMarkup);
      const newElements = Array.from(newDOM.querySelectorAll('*'));
      // console.log(typeof(newMarkup),newMarkup);
      // console.log(typeof(newElements) ,newElements);
      const curElements = Array.from(this._parentElement.querySelectorAll('*'));
      // concurElements[i]sole.log(curElements ,newElements);
      // console.log(curElements[13].innerHTML, newElements[13].innerHTML);
      newElements.forEach((newEl, i) => {
        // console.log(curElements[i].firstChild);
        // Update changed text : Check if new and current are different and if content of nodes contains only text
        if (!newEl.isEqualNode(curElements[i]) && curElements[i].firstChild?.nodeValue.trim() !== '') {
          // console.log(`====== ${curElements[i].firstChild?.nodeValue.trim()}`);
          curElements[i].textContent=newEl.textContent;
        }
        // Update changed attributes : update values for data-update-to 
        if (!newEl.isEqualNode(curElements[i])) {
          Array.from(newEl.attributes).forEach(attr =>
            curElements[i].setAttribute(attr.name, attr.value)
            );
        }
      })
    }

    _clear() {
        this._parentElement.innerHTML = '';
    };

    renderSpinner() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this._errorMessage) {
      const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div> 
      `;
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderMessage(message = this._message) {
      const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
      </div>
      `;
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

}