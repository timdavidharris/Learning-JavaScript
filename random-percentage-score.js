// prompt("What is your name?");
// prompt("What is the name of your crush?");
let randomNumber = Math.random();
randomNumber = randomNumber * 100;
randomNumber = Math.floor(randomNumber) + 1;

if (randomNumber > 70) {
  console.log("Your love score is " + randomNumber + ", you have love like Kanye has for Kanye.");
} else if (randomNumber > 30 && randomNumber <= 70) {
  console.log("Your love sore is " + randomNumber + ", your love is okay.");
} else {
  console.log("Your love score is " + randomNumber + ", you go together like oil and water. Maybe you should break up.");
}