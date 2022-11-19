'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this)); // on a listener event, this will point to the event, to prevent it call wiht bind(this)
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            alert('Could not get your position');
            });
        };
    }

    _loadMap(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        console.log(`https://www.google.fr/maps/@${latitude},${longitude}z`);
    
        this.#map = L.map('map').setView([latitude, longitude], 12);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        // map.on() is an event listener for map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden')
        inputDistance.focus(); // Put the cursor on this field
    }

    _toggleElevationField() {
        //     if (inputType.value === 'running') {
        //         inputCadence.parentNode.classList.remove('form__row--hidden');
        //         inputElevation.parentNode.classList.add('form__row--hidden');
        //     }
        //     else if (inputType.value === 'cycling') {
        //         inputCadence.parentNode.classList.add('form__row--hidden');
        //         inputElevation.parentNode.classList.remove('form__row--hidden');
        //     }
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault();
        // console.log(inputDistance.value);
        const { lat , lng } = this.#mapEvent.latlng;        
        L.marker([lat, lng]).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('Workout')
        .openPopup();
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    }    
}

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords; //  [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
}

////////////////////////////////////////////////
//////// Workout Classes /////////////////////
class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    
    calcSpeed() {
        // km/hour
        this.speed = this.distance / (this.duration / 60)
        return this.speed;
    }
}
const app = new App();

// const run1 = new Running([39,-12], 10, 45, 178);
// const cycle1 = new Cycling([39,-12], 40, 90, 100);
// console.log(run1,cycle1);



