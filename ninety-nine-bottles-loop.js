let bottlesOfBeer = 99

while (bottlesOfBeer >= 0) {
    if (bottlesOfBeer === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else if (bottlesOfBeer === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer. Take 1 down and pass it around, no more bottles of beer on the wall.");
    } else if (bottlesOfBeer === 2) {
        console.log("2 bottles of beer on the wall, 2 bottles of beer. Take 1 down and pass it around, one more bottle of beer on the wall.");
    } else {
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer. Take one down and pass it around " + (bottlesOfBeer - 1) + " bottles of beer on the wall.");
    }
    
    bottlesOfBeer--;
}