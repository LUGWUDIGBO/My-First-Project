const timeDisplay = document.getElementById("id-time");
const toggleBtn = document.getElementById("toggle-button");
const resetBtn = document.getElementById("reset-button");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let running = false;

toggleBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
    toggleBtn.textContent = "Stop";
  } else {
    running = false;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
    toggleBtn.textContent = "Start";
  }
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(intervalId);
  startTime = elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
  toggleBtn.textContent = "Start";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const secs = Math.floor((elapsedTime / 1000) % 60);
  const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hrs  = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  timeDisplay.textContent = 
    [hrs, mins, secs].map(val => String(val).padStart(2, "0")).join(":");
}
