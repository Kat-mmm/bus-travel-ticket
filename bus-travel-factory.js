function BusTraveTicket(){
    let thePoints = 0;
    let theLocation = '';
    let theTime = '';
    let returnTrip = false;

    function points(userPoints){
        thePoints = userPoints;
    }

    function location(userLocation){
        theLocation = userLocation;
    }

    function pricePerSingleTrip(){
        if(theLocation === 'Khayelitsha'){
            return 40;
        }
        else if(theLocation === 'Dunoon'){
            return 25;
        }
        else if(theLocation === 'Mitchells Plain'){
            return 30;
        }
    }

    function pricePerReturnTrip(){
        isReturn =  true;
        return pricePerTripBasedOnTime() * 2;
    }

    function numberOfSingleTrips(){
        if(thePoints < 25){
            return 0;
        }
        else{
            return Math.floor(thePoints / pricePerTripBasedOnTime());
        }
    }

    function numberOfReturnTrips(){
        isReturn = true;
        if(thePoints < 50){
            return 0;
        }
        else{
            return Math.floor(thePoints / (pricePerReturnTrip()) );
        }
    }

    function travelTime(userTime){
        theTime = userTime;
    }

    function isReturn(){
        return returnTrip;
    }

    function pricePerTripBasedOnTime(){
        if(theTime === 'peak'){
            return (pricePerSingleTrip() + (pricePerSingleTrip() * 0.25));
        }
        else if(theTime === 'off-peak'){
            return pricePerSingleTrip();
        }
        else{
            return pricePerSingleTrip();
        }
    }

    return{
        points,
        location,
        pricePerSingleTrip,
        pricePerReturnTrip,
        numberOfSingleTrips,
        numberOfReturnTrips,
        travelTime,
        isReturn, 
        pricePerTripBasedOnTime
    }
}