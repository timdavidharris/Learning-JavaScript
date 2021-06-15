function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output.push(0);
    } else if (n === 2) {
        output.push(0, 1)
    } else {
        output = [0, 1];
        // the for loop has to all refer to the same variable
        for (var i = 2; i < n; i++) {
            // output[output.length - i] allows us to select the last or second to last item from an array
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
      }
    console.log(output);
    return output;

}

// I am running 3 different numbers through the function to test multiple items at one time
fibonacciGenerator(1);
fibonacciGenerator(10);
fibonacciGenerator(20);