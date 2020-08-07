let tensSecond = document.getElementById("secondTens");
let onesSecond = document.getElementById("secondOnes");
let colon = document.getElementById('colon');
let hundredsMS = document.getElementById('msHundreds');
let tensMS = document.getElementById('msTens');


var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime(){
    ++totalSeconds;
    tensSecond.textContent=totalSeconds;

    // if 
    // ++hundredsMS

    // if
}