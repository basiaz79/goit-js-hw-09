function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let isChangingColor = false;

function changeBackgroundColor() {
    // 
    document.body.style.backgroundColor = getRandomHexColor();
    setTimeout(changeBackgroundColor, 1000);
}

startButton.addEventListener('click', () => {
    // 
       isChangingColor = true;
       // 
       changeBackgroundColor();
       startButton.disabled = true;
    //
});

stopButton.addEventListener('click', () => {
    // 
});