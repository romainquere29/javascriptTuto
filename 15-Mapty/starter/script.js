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
    #workouts = [];

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
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp) && inp > 0);
        const positiveInputs = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();
        // console.log(inputDistance.value);

        //   Get data from form and Check if data is valid
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = +inputDuration.value;
        const { lat , lng } = this.#mapEvent.latlng;   
        let workout;     

        if (type === 'running') {
            const cadence = +inputCadence.value;
            if(!validInputs(distance,duration,cadence) ||  !positiveInputs(distance,duration,cadence))
            // if(!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence)) 
                return alert('Inputs have to be postive numbers')
        // If activity running, create running object
        workout = new Running([lat , lng], distance, duration, cadence);
        }

        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if(!validInputs(distance,duration,elevation) || !positiveInputs(distance,duration))
                return alert('Inputs have to be postive numbers')
            // If activity cycling, create cycling object
            workout = new Cycling([lat , lng], distance, duration, elevation);
        }

        // Add new object to workout array
        this.#workouts.push(workout);
        console.log(this.#workouts);

        //Render workout on map as marker
        this.renderWorkoutMarker(workout);

        //Render workout on list

        //Hide form + Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    }    

    renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        }))
        .setPopupContent('workout')
        .openPopup();
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
    type = 'running';
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
    type = 'cycling';
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



