const inputTime = document.getElementById("input-time");
const startBtn = document.getElementById("start-btn");
const timerSpace = document.getElementById("timer-space");
const currentTime = document.getElementById("current-time");

setInterval(() => {
    let ctime = new Date
    currentTime.innerText = ctime
}, 1000);


// Audio
const audioElement = document.createElement('audio')
audioElement.src = 'timersound.mp3'
audioElement.controls = true

const stopTimer = () => {
    window.location.reload(true)
}

const startTimer = () => {
    // console.log(inputTime.value);
    let time = parseInt(inputTime.value);
    // console.log(typeof(time));
    let countDown = time;
    const interval = setInterval(() => {
        timerSpace.style.color='black'
        timerSpace.innerText = countDown;
        audioElement.play();
        startBtn.value = "Stop"
        startBtn.addEventListener("click", stopTimer)
        if (countDown <= 0) {
            timerSpace.innerText = `${inputTime.value} seconds, timer completed`;
            clearInterval(interval);
            inputTime.style.visibility = "visible"
            inputTime.value = ""
            startBtn.value = "Start"
            audioElement.pause();
        } else {
            countDown--;
        }
    }, 1000);
    inputTime.style.visibility = "hidden"
}

const check = () => {
    if ((inputTime.value != '') && (inputTime.value > 0)) {
        startTimer()
    } else {
        timerSpace.innerText = "Enter a valid time duration (seconds)";
        timerSpace.style.color='red'
    }
}

startBtn.addEventListener("click", check);
