/**
 * @author Amirhssein Azimyzdeh
 * FALL 2020
 * */


// -- COLOR HANDLER --
const lastColorButton = document.getElementById('last_color');
const currentColorButton = document.getElementById('current_color');
lastColorButton.style.backgroundColor = lastColor;
currentColorButton.style.backgroundColor = currentColor;


lastColorButton.addEventListener('click', () => { changeColor(lastColor); });

currentColorButton.addEventListener('click', () => {
    openColorPicker();
});

// -- CANVAS HANDLER --
const canvas = document.getElementById('base_canvas');
let ctx = canvas.getContext('2d');


function getRealPosition(e) {
    const rect = canvas.getBoundingClientRect();
    if (touch === undefined) {
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
    }
    var touch = e.touches[0];
    return {
        x: touch.pageX - rect.left,
        y: touch.pageY - rect.top,
    }
}

const lastPoint = { x: 0, y: 0 };
let isSecond = false;
let startPoint = { x: 0, y: 0 };

function onPenStartDrawing(e) {
    ctx.beginPath();
    ctx.lineWidth = currentPenWidth;
    const { x, y } = getRealPosition(e);

    lastPoint.x = x;
    lastPoint.y = y;

    startPoint.x = x;
    startPoint.y = y;

    pathPoints.push({ x, y });

    isMouseHold = true;
}

function onPenStopDrawing() {
    isMouseHold = false;
    ctx.lineWidth = 1;
    ctx.closePath();


    pathPoints = [];
}

function onPenDrawing(e) {
    if (!isMouseHold) return;
    const { x, y } = getRealPosition(e);


    if (isSecond) {
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(x, y);

        ctx.lineCap = "round";
        ctx.stroke();
        lastPoint.x = x;
        lastPoint.y = y;
        isSecond = false;
    }

    ctx.strokeStyle = currentColor;


    pathPoints.push({ x, y });

    isSecond = true;
}

let isMouseHold = false;
canvas.addEventListener('touchstart', onPenStartDrawing);
canvas.addEventListener('touchend', onPenStopDrawing);
canvas.addEventListener('touchmove', onPenDrawing);
canvas.addEventListener('mousedown', onPenStartDrawing);
canvas.addEventListener('mouseup', onPenStopDrawing);
canvas.addEventListener('mousemove', onPenDrawing);
