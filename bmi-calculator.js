function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    return interpretation;
  }
  
  function interpretation() {
    if (bmi < 18.5) {
      console.log("Your BMI is " + bmi + ", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log("Your BMI is " + bmi + ", so you have a normal weight.");
    } else if (bmi === 24.9) {
      console.log("Your BMI is " + bmi + ", so you are overweight.");
    }
  }
  
  let bmi = bmiCalculator(65, 1.8);
  console.log(bmi);
  console.log(interpretation);
  
  
  /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
  
  bmi should equal 20 when it's rounded to the nearest whole number.
  
  */