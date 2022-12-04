'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

let data, data2;


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

const renderCountry = function (data, className = '') {

    const html = `    
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages).toString(' ')}</p>
    <p class="country__row"><span>💰</span>${Object.values((Object.values(data.currencies))[0])[0]}</p>
    </div>
    </article>`;
    console.log(html);
    countriesContainer.insertAdjacentHTML('beforeend', html);
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

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

const GetCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
        if (!response.ok)
            throw new Error(`Country not found ${response.status}`)
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
        console.log(`${err}`);
        renderError(`Something went wrong :  ${err.message}. Try again...`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
};


const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(`${errorMsg} (${response.status})`)
            return response.json();
        });
};

const GetCountryAndNeighbour = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
        .then(function (data) {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0]; // ?. for optionnal
            // const neighbour = 'RRRRR';

            console.log(neighbour);
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Country not found`)
        })
        .then(response => response.json())
        .then((data) => renderCountry(data[0], 'neighbour'))
        .catch(err => {
            console.log(`${err}`);
            renderError(`Something went wrong :  ${err.message}. Try again...`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
};

btn.addEventListener('click', function () {
    // GetCountryData('france');
    GetCountryAndNeighbour('australia');
});

// GetCountryAndNeighbour('aaaaaa');


/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// let country ='';

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=%27430784897542134392642x64404%27`)
    .then(response => {
    if (!response.ok) 
        throw new Error (`Problme with geocodind ${reponse.status}`)
    return response.json()})
    .then(data => {
        const country = data.country;
        console.log(`You're in ${data.city}, ${country}`)
        return fetch(`https://restcountries.com/v3.1/name/${country}`)
    })
    .then(response => {
        if (!response.ok)
            throw new Error(`Country not found ${response.status}`)
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
        console.log(`${err}`);
        renderError(`Something went wrong :  ${err.message}. Try again...`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}

whereAmI(52.508, 13.3810);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);