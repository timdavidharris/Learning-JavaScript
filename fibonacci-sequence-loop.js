function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0, 1)
    } else {
        var output = [0, 1, 1];
        var lastArrayNumber = output.slice(-1).pop();
        var secondToLastArrayNumber = output.slice(-2).pop();
        var newNumber = lastArrayNumber + secondToLastArrayNumber;
        for (n = 3; n == output.length; output.push(newNumber)) {
            console.log(output);
        }
      }
    console.log(output);
    console.log(lastArrayNumber);
    console.log(secondToLastArrayNumber);
    console.log(newNumber);
    console.log(output.length)

}

fibonacciGenerator(10);