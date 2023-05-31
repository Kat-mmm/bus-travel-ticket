//reference the html elements
const pointsEl = document.getElementById('points');
const startLocation = document.getElementById('start-location');
const travelTimeRadBtns = document.querySelectorAll('.travel-time');
const returnTripChckBox = document.getElementById('return-trip');
const calculateBtn = document.querySelector('.calculate-btn');
const singleTripsEl = document.getElementById('num-single-trips');
const tripPriceEl = document.getElementById('price-per-trip');
const returnTripsEl = document.getElementById('num-return-trips');
const pricePerReturnTripEl = document.getElementById('price-per-return-trip');

let checkedTime = '';
travelTimeRadBtns.forEach(btn => {
    btn.addEventListener('change', ()=>{
        if(btn.checked){
            checkedTime = btn.value;
        }
    })
})

function costPerTrip(){
    let costPerTrip = 0;

    if(startLocation.value === 'Khayelitsha'){
        costPerTrip = 40;
    }
    else if(startLocation.value === 'Dunoon'){
        costPerTrip = 25;
    }
    else if(startLocation.value === 'Mitchells Plain'){
        costPerTrip = 30;
    }

    return costPerTrip;
}

function totalNumOfTrips(){
    let points = parseInt(pointsEl.value);

    if(points < 25){
        return 0;
    }
    else{
        return Math.floor(points / pricePerTripBasedOnTime());
    }
}

function numOfReturnTrips(){
    let points = parseInt(pointsEl.value);

    if(points < 50){
        return 0;
    }
    else{
        return Math.floor(points / (pricePerTripBasedOnTime() * 2) );
    }
}

let costPerReturnTrip = () => {
    return pricePerTripBasedOnTime() * 2;
};

function pricePerTripBasedOnTime(){
    if(checkedTime === 'peak'){
        return costPerTrip() + (costPerTrip() * 0.25);
    }
    else if(checkedTime === 'off-peak'){
        return costPerTrip();
    }
    else{
        return costPerTrip();
    }
}

function busTravelTicket() {
    singleTripsEl.value = totalNumOfTrips();
    tripPriceEl.value = pricePerTripBasedOnTime();
    if (returnTripChckBox.checked) {
        returnTripsEl.value = numOfReturnTrips();
        pricePerReturnTripEl.value = costPerReturnTrip();
    }
}

calculateBtn.addEventListener('click', busTravelTicket);
