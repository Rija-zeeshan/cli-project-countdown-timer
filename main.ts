#! /usr/bin/env node
import { differenceInSeconds } from "date-fns/differenceInSeconds";

//function for count down second
function* countdownTimer(second: number){
    //while loop
    while (second > 0){
        yield second;
        second--;
    }
}

//step 2 
let timerIterator = countdownTimer(25);
//function to create a count down timer
function displayCountdown(){
    //value below 10
    let result = timerIterator.next();
    // if else condition 
    if(!result.done){
        const now = new Date();

        const countdownTime = new Date(now.getTime() + (result.value * 1000))

        //calculate remaining in seconds

const remainingSeconds = differenceInSeconds (countdownTime , now)
console.log(`Remaining Seconds: ${remainingSeconds}`);

setTimeout(displayCountdown, 1000)

    } else {
        console.log("Countdown Complete!")
    }
}
displayCountdown();
