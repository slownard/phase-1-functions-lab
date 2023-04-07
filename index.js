// Code your solution in this file!

function asdf() {
    console.log("asdf");
    let num = 0;
    num += 1;
}

asdf();



function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    // const distance = someValue;
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
} 
