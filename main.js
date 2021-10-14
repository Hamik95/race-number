let raceNumber = Math.floor(Math.random() * 1000);
var early = true;
var runnerAge = 25; 

if (early && runnerAge > 18){
  raceNumber += 1000;
}

if (early && runnerAge > 18) {
  console.log (`The runner over 18 will start the race at 9:30am and your number is: ${raceNumber}`) 
}
else if (!early && runnerAge > 18) {
console.log (`Late adults will start the race at 11:00am, your number is: ${raceNumber}`);
}
else if (runnerAge < 18) {
  console.log (`Regardless of registration anyone under 18 will be running at 12:30pm, the race number is: ${raceNumber} `);
}
else {
  console.log('Please see the registration desk for any help');
};



