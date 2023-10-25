
let countdown = 5;
let countdownInterval;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

function updateTimerDisplay() {
    timerDisplay.textContent = countdown;
}

function startCountdown() {
  
    countdownInterval = setInterval(function () {
        countdown--;
        updateTimerDisplay();
        if (countdown === 3) {
            const audio = document.getElementById('myAudio');
            audio.play();
        }
        if (countdown === 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = 'Let off the fireworks! heppy new yar';
            // Here, you can call a function to light fireworks or perform any other action.
            window.location.href = 'https://www.youtube.com/watch?v=QaR31V5xBQ8';
        }
    }, 1000); // 1000 milliseconds = 1 second
}

startButton.addEventListener('click', startCountdown);
