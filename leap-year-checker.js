let year = prompt("What year are you trying to figure out if it is a leap year?\n");

if (year % 4 === 0)
  if (year % 100 === 0)
    if (year % 400 === 0)
      console.log("The year " + year + " is a leap year."); 
    else 
      console.log("The year " + year + " is not a leap year.");
  else 
    console.log("The year " + year + " is a leap year.");
else 
  console.log("The year " + year + " is not a leap year.");