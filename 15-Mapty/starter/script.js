'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


////////////////////////////////////
//////// App Classes ///////////////

class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();

        // Get data from local storage
        this._getLocalStorage();

        // Attach event handlers
        form.addEventListener('submit', this._newWorkout.bind(this)); // on a listener event, this will point to the event, to prevent it call wiht bind(this)
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
        // console.log(latitude, longitude);
        // console.log(`https://www.google.fr/maps/@${latitude},${longitude}z`);
    
        this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        // map.on() is an event listener for map
        this.#map.on('click', this._showForm.bind(this));

        this.#workouts.forEach(work => {
            this._renderWorkoutMarker(work);
        });
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus(); // Put the cursor on this field
    }

    _hideForm() {
    // Empty form and hide it
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'),1000);
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
        // console.log(this.#workouts);

        //Render workout on map as marker
        this._renderWorkoutMarker(workout);

        //Render workout on list
        this._renderWorkout(workout);

        //Hide form + Clear input fields
        this._hideForm();

        //Set local storage to all workouts
        this._setLocalStorage();
        
    }    

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        }))
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
        .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
                    workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>`;
        if (workout.type === 'running') {
            html += `          
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>`;
        } 
        if (workout.type === 'cycling') {
            html += `          
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>`;           
        }
    form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(event) {
        const workoutEl = event.target.closest('.workout');
        if (!workoutEl) return;
        const id = workoutEl.dataset.id;
        const workout = this.#workouts.find(el => el.id === id);
        // console.log(id,workout);
        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        });

        // workout.click();
    }

    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));

        if(!data) return;
        this.#workouts = data;
        this.#workouts.forEach(work => {
            this._renderWorkout(work);
        })
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}

////////////////////////////////////////////////
//////// Workout Classes /////////////////////

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords; //  [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
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
        this._setDescription();
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



