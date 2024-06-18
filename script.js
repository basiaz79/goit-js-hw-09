function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let isChangingColor = false;
let timeoutId;
  
function changeBackgroundColor() {
  if (isChangingColor) {
    document.body.style.backgroundColor = getRandomHexColor();
    timeoutId = setTimeout(changeBackgroundColor, 1000);
  }
}
  
startButton.addEventListener('click', () => {
  if (!isChangingColor) {
    isChangingColor = true;
    changeBackgroundColor();
    startButton.disabled = true;
    stopButton.disabled = false;
  }
});
  
stopButton.addEventListener('click', () => {
  if (isChangingColor) {
    isChangingColor = false;
    clearTimeout(timeoutId);
    startButton.disabled = false;
    stopButton.disabled = true;
  }
});