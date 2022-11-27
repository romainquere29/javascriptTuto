'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

let data,data2;


// const GetCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     let data;
//     request.addEventListener('load', function() {
//         [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `    
//         <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages).toString(' ')}</p>
//         <p class="country__row"><span>💰</span>${Object.values((Object.values(data.currencies))[0])[0]}</p>
//         </div>
//         </article>`;
//         console.log(html);
//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity = 1;
//     })
// }

const renderCountry = function(data, className = '') {

    const html = `    
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages).toString(' ')}</p>
    <p class="country__row"><span>💰</span>${Object.values((Object.values(data.currencies))[0])[0]}</p>
    </div>
    </article>`;
    console.log(html);                                              
    countriesContainer.insertAdjacentHTML('beforeend',html);
}

// const GetCountryAndNeighbour = function (country) {

//     //AJAX Call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();


//     request.addEventListener('load', function() {
//         [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);

//         const neigbour = data.borders?.[0]; // ?. for optionnal chaining
//         //AJAX Call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neigbour}`);
//     request2.send();
//     request2.addEventListener('load', function() {
//         [data2] = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2, 'neighbour');
//     });
//     });
// }

// GetCountryData('france');
// GetCountryData('portugal');
// GetCountryData('usa');
// GetCountryAndNeighbour('usa');

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//         }, 1000);
//     }, 1000);
// }, 1000);


//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/france`);
// console.log(request);

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend',msg);
}

const GetCountryData = function(country) {    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
        if (!response.ok)
            throw new Error(`Country not found ${response.status}`)
        return response.json();
    })
    .then(data=> renderCountry(data[0]))
    .catch(err => {
        console.log(`${err }`);
        renderError(`Something went wrong :  ${err.message}. Try again...`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
    };


const getJSON = function(url, errorMsg = 'Someting went wrong') {
    return fetch(url)
    .then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`)
        return response.json();
    });
};

const GetCountryAndNeighbour = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`,`Country not found`)
    .then(function(data) {
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0]; // ?. for optionnal
        // const neighbour = 'RRRRR';

        console.log(neighbour);
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Country not found`)})
    .then(response => response.json())
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch(err => {
        console.log(`${err }`);
        renderError(`Something went wrong :  ${err.message}. Try again...`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
};

btn.addEventListener('click', function() {
    // GetCountryData('france');
    GetCountryAndNeighbour('australia');
});

// GetCountryAndNeighbour('aaaaaa');
