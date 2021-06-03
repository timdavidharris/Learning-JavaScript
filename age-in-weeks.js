function lifeInWeeks(age) {
    let yearsLeft = 90 - age;
    let days = yearsLeft * 365;
    let weeks = yearsLeft * 52;
    let months = yearsLeft * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

lifeInWeeks(51);