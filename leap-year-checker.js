function isLeap(year) {
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
  }
  
  isLeap(2000);
  isLeap(1948);
  isLeap(1905);
  isLeap(100);  