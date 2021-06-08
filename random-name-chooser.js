
function whosPaying() {
    let names = ["Jason", "Tim", "Mike", "Edmond", "Jay", "Kyle"];
    let randomNumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    let randomResult = (names[randomNumber] + " is going to buy lunch today")
    console.log(randomResult);
    console.log(randomNumber);
    return randomResult;
}
whosPaying();