let startTime;
let elapsedTime = 0;
let timerInterval = null;

let lapCounter = 0;
let lapTimes = [];

const display =
document.getElementById("display");

const lapsContainer =
document.getElementById("laps");

document
.getElementById("startBtn")
.addEventListener("click", startTimer);

document
.getElementById("pauseBtn")
.addEventListener("click", pauseTimer);

document
.getElementById("resetBtn")
.addEventListener("click", resetTimer);

document
.getElementById("lapBtn")
.addEventListener("click", addLap);

function startTimer(){

    if(timerInterval) return;

    startTime =
    Date.now() - elapsedTime;

    timerInterval =
    setInterval(()=>{

        elapsedTime =
        Date.now() - startTime;

        updateDisplay();

    },10);
}

function pauseTimer(){

    clearInterval(timerInterval);

    timerInterval = null;
}

function resetTimer(){

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    lapCounter = 0;

    lapTimes = [];

    display.textContent =
    "00 : 00 : 00 : 000";

    lapsContainer.innerHTML = "";

    document
    .getElementById("lapCount")
    .textContent = "0";

    document
    .getElementById("bestLap")
    .textContent = "--";
}

function updateDisplay(){

    const milliseconds =
    elapsedTime % 1000;

    const seconds =
    Math.floor(elapsedTime / 1000) % 60;

    const minutes =
    Math.floor(elapsedTime / 60000) % 60;

    const hours =
    Math.floor(elapsedTime / 3600000);

    display.textContent =
    `${String(hours).padStart(2,"0")} :
     ${String(minutes).padStart(2,"0")} :
     ${String(seconds).padStart(2,"0")} :
     ${String(milliseconds).padStart(3,"0")}`;
}

function addLap(){

    if(elapsedTime === 0) return;

    lapCounter++;

    lapTimes.push(elapsedTime);

    document
    .getElementById("lapCount")
    .textContent = lapCounter;

    const lap =
    document.createElement("div");

    lap.classList.add("lap-item");

    lap.innerHTML = `
        <span>Lap ${lapCounter}</span>
        <span>${display.textContent}</span>
    `;

    lapsContainer.prepend(lap);

    updateBestLap();
}

function updateBestLap(){

    const fastest =
    Math.min(...lapTimes);

    const milliseconds =
    fastest % 1000;

    const seconds =
    Math.floor(fastest / 1000) % 60;

    const minutes =
    Math.floor(fastest / 60000) % 60;

    document
    .getElementById("bestLap")
    .textContent =
    `${String(minutes).padStart(2,"0")} :
     ${String(seconds).padStart(2,"0")} :
     ${String(milliseconds).padStart(3,"0")}`;
}
