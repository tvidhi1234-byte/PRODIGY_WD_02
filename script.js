
let startTime;
let elapsedTime = 0;
let timerInterval;

let laps = [];

function timeToString(time){

    let hrs =
    Math.floor(time / 3600000);

    let mins =
    Math.floor((time % 3600000) / 60000);

    let secs =
    Math.floor((time % 60000) / 1000);

    let ms =
    Math.floor(time % 1000);

    return (
        String(hrs).padStart(2,'0')
        + " : " +
        String(mins).padStart(2,'0')
        + " : " +
        String(secs).padStart(2,'0')
        + " : " +
        String(ms).padStart(3,'0')
    );
}

function startTimer(){

    startTime =
    Date.now() - elapsedTime;

    timerInterval =
    setInterval(function(){

        elapsedTime =
        Date.now() - startTime;

        document.getElementById(
            "display"
        ).innerText =
        timeToString(elapsedTime);

    },10);
}

function pauseTimer(){

    clearInterval(timerInterval);

}

function resetTimer(){

    clearInterval(timerInterval);

    elapsedTime = 0;

    laps = [];

    document.getElementById(
        "display"
    ).innerText =
    "00 : 00 : 00 : 000";

    document.getElementById(
        "laps"
    ).innerHTML = "";

    document.getElementById(
        "lapCount"
    ).innerText = "0";

    document.getElementById(
        "bestLap"
    ).innerText = "--";
}

function addLap(){

    let lapTime =
    timeToString(elapsedTime);

    laps.push(elapsedTime);

    const lapDiv =
    document.createElement("div");

    lapDiv.className =
    "lap-item";

    lapDiv.innerHTML =
    "Lap " +
    laps.length +
    " — " +
    lapTime;

    document
    .getElementById("laps")
    .prepend(lapDiv);

    document.getElementById(
        "lapCount"
    ).innerText =
    laps.length;

    let fastest =
    Math.min(...laps);

    document.getElementById(
        "bestLap"
    ).innerText =
    timeToString(fastest);

    localStorage.setItem(
        "veluneLaps",
        JSON.stringify(laps)
    );
}
