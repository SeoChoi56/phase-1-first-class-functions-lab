// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice(array.length-2, array.length)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    function createFare(fare) {
        return multiplier * fare
    }
    return createFare;
}

function fareDoubler(fare) {
    const fareFinder = createFareMultiplier(2);
    return fareFinder(fare);
}

const fareTripler = fare => {
    const fareFinder = createFareMultiplier(3);
    return fareFinder(fare);
}

function selectDifferentDrivers(array, arrayFunc) {
    if (arrayFunc === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array);
    }
    
}