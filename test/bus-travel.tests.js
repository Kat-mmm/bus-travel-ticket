describe('Bus Travel Widget Tests', ()=>{
    it('should calculate the number of single trips that can be taken with the points enetred for Khayelitsha', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(80);
        busTravel.location('Khayelitsha');

        assert.equal(2, busTravel.numberOfSingleTrips());
    })
    it('should calculate the number of single trips that can be taken with the points enetred for Dunoon', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(75);
        busTravel.location('Dunoon');

        assert.equal(3, busTravel.numberOfSingleTrips());
    })
    it('should calculate the number of single trips that can be taken with the points enetred for Mitchells Plain', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(30);
        busTravel.location('Mitchells Plain');

        assert.equal(1, busTravel.numberOfSingleTrips());
    })
    it('should calculate the number of return trips that can be taken with the points enetred for Khayelitsha', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(80);
        busTravel.location('Khayelitsha');

        assert.equal(1, busTravel.numberOfReturnTrips());
    })
    it('should calculate the number of return trips that can be taken with the points enetred for Dunoon', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(75);
        busTravel.location('Dunoon');

        assert.equal(1, busTravel.numberOfReturnTrips());
    })
    it('should calculate the number of return trips that can be taken with the points enetred for Mitchells Plain', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(30);
        busTravel.location('Mitchells Plain');

        assert.equal(0, busTravel.numberOfReturnTrips());
    })
    it('when the points are not enough for a single trip at a certain location the number of trips that can be made must be 0', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(19);
        busTravel.location('Mitchells Plain');

        assert.equal(0, busTravel.numberOfSingleTrips());
    })
    it('should calculate the price per single trip for Khayelitsha', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Khayelitsha');

        assert.equal(40, busTravel.pricePerSingleTrip());
    })
    it('should calculate the price per return trip for Khayelitsha', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Khayelitsha');

        assert.equal(80, busTravel.pricePerReturnTrip());
    })
    it('should calculate the price per single trip for Dunoon', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Dunoon');

        assert.equal(25, busTravel.pricePerSingleTrip());
    })
    it('should calculate the price per return trip for Dunoon', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Dunoon');

        assert.equal(50, busTravel.pricePerReturnTrip());
    })
    it('should calculate the price per single trip for Mitchells Plain', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Mitchells Plain');

        assert.equal(30, busTravel.pricePerSingleTrip());
    })
    it('should calculate the price per return trip for Mitchells Plain', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.location('Mitchells Plain');

        assert.equal(60, busTravel.pricePerReturnTrip());
    })
    it('when the return trip is checked, the number of return trips and the cost of each return trip should be calculated', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(90);
        busTravel.location('Mitchells Plain');

        assert.isTrue(true, busTravel.isReturn());
        assert.equal(60, busTravel.pricePerReturnTrip());
        assert.equal(1, busTravel.numberOfReturnTrips());
    })
    it('when the radio button for peak time is selected, the cost of a single trip should be +25% and the number of single trips that can be taken with the points must be calculated', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(75);
        busTravel.location('Dunoon');
        busTravel.travelTime('peak');

        assert.equal(1, busTravel.numberOfReturnTrips());
        assert.equal(62.5, busTravel.pricePerReturnTrip());
    })
    it('when the radio button for off peak time is selected, the cost of a single trip should be the same and the number of single trips that can be taken with the points must be calculated', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(120);
        busTravel.location('Khayelitsha');
        busTravel.travelTime('off-peak');

        assert.equal(3, busTravel.numberOfSingleTrips());
        assert.equal(40, busTravel.pricePerSingleTrip())
    })
    it('when the radio button for peak time is selected and the return trip is checked, the cost of a single trip and return trip should be +25% and the number of single trips and return trips that can be taken with the points must be calculated', ()=>{
        let busTravel = BusTraveTicket();
        busTravel.points(100);
        busTravel.location('Mitchells Plain');
        busTravel.travelTime('peak');

        assert.isTrue(true, busTravel.isReturn());
        assert.equal(2, busTravel.numberOfSingleTrips());
        assert.equal(37.5, busTravel.pricePerTripBasedOnTime());
        assert.equal(1, busTravel.numberOfReturnTrips());
        assert.equal(75, busTravel.pricePerReturnTrip());
    })
})