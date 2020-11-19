// COLOR
let lastColor = '#ffff';
let currentColor = '#000';
let colotOpacity = 1;

function changeColor(newColor) {
    lastColor = currentColor;
    currentColor = newColor;

    lastColorButton.style.backgroundColor = lastColor;
    currentColorButton.style.backgroundColor = currentColor;
    penPointer.style.backgroundColor = currentColor;
}

// Line
let pathPoints = [];


// --- PEN WIDTH HANDLER ---
const minPenWidth = 1;
const maxPenWidth = 80;
let currentPenWidth = 0.1 * maxPenWidth;

const rangeInput = document.getElementById('width_range');
rangeInput.value = ((currentPenWidth / maxPenWidth) * 100) + minPenWidth;
rangeInput.addEventListener('change', (e) => {

    currentPenWidth = (e.target.value / 100) * (maxPenWidth - minPenWidth) + minPenWidth;
});
