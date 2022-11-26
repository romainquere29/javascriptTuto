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
    countriesContainer.style.opacity = 1;
}

const GetCountryAndNeighbour = function (country) {

    //AJAX Call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();


    request.addEventListener('load', function() {
        [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);

        const neigbour = data.borders?.[0]; // ?. for optionnal chaining
        //AJAX Call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neigbour}`);
    request2.send();
    request2.addEventListener('load', function() {
        [data2] = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
    });
    });
}

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

const request = fetch(`https://restcountries.com/v3.1/name/france`);
console.log(request);