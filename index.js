//Within that same HTML file, create a string with the following value: var string = "D017|D020|D0200|D023|D034|D038|D049|D079|D1004|D102|D105"
//Turn the string into an array with each "DXXX" value taking up one index in the array. 
//Create an input field and 2 buttons, "Start" and "Stop". When you click "Start" a timer should begin and display one value from the array in the
//input field every 2 seconds. When you click "Stop" the timer should stop and whatever value is in the input field should remain and not be cleared.

//bring in all my html elements
var myArray = document.querySelector("#Array").value;
var myTime = document.querySelector("#Time").value;
var Start = document.querySelector("#Start").value;
var Stop = document.querySelector("#Stop").value;
var seconds = 0;
var minutes = 0;
var TimeDontStop = 0;
var hours = "0";
var tens = "0";


var string = "Hello|World|My|Name|Is|Kopano|Sekonyela";
var stringArray = [];

let i = 1;
let a = 0;
//spliting the string to create the DXXX value
stringArray = string.split("|");

//calling my function every second
var myVar;
function startTimer(){
//making the time start when time is 0 or paused
    if(seconds == 0 && minutes == 0){
        myVar = setInterval(myTimer, 1000);
    }
    else if(TimeDontStop > seconds){
        myVar = setInterval(myTimer, 1000)
        TimeDontStop--;
    }
}

function myTimer(){

    seconds++;
    if(seconds == 60){
        tens = "0";
        seconds = 0;
    }
    TimeDontStop++;
    document.querySelector("#Time").innerText = (hours + minutes + " : " + tens + seconds)

    //displaying my Array if the time is even
    if(seconds % 2 == 0){
        document.querySelector("#Array").innerText = stringArray[i];
        i++;
        a = (i - 1);
    }
    if(seconds == 9){
        tens = "";
    }
    if(seconds == 59 && minutes == 9){
        hours = "";
    }
    if(seconds == 59){
        minutes++;
        TimeDontStop = 0;
        tens = "0";
    }
    //stoping the timer when the array is completed.
    if(a == stringArray.length){
        document.querySelector("#Array").innerText = "Hello";
        i = 1;
    }
}

//listening on the stop button to stop the time.
document.querySelector("#Stop").addEventListener("click", function(){
    clearInterval(myVar);
    TimeDontStop++;
});
