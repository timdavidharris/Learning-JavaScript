function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));
  var interpretation = "";
  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  } else {
    interpretation = "Invalid";
  }
  return interpretation;
}

var bmi = bmiCalculator(60, 2);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.

*/