let background;
let contianer;

/**
 * @param {string} color
 * @param {function} onClickCallBack
 * @returns {Node}
 *  */
function colorElement(color, onClickCallBack) {
    const element = document.createElement('div');
    Object.assign(element.style, {
        backgroundColor: color,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
        border: color === '#000' ? '2px solid gray' : 'none',
    });

    element.addEventListener('click', () => { onClickCallBack(color); });

    return element;
}
function closeColorPicker() {
    document.body.removeChild(background);
    document.body.removeChild(contianer);
}
function openColorPicker() {
    background = document.createElement('div');
    Object.assign(background.style, {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
    });

    contianer = document.createElement('div');
    Object.assign(contianer.style, {
        position: 'fixed',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        width: '400px',
        height: '400px',
        zIndex: '100',
        backgroundColor: 'rgb(0,0,0)',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
    });
    background.addEventListener('click', closeColorPicker);
    document.body.appendChild(background);

    const colors = [
        '#000',
        '#ffff',
        '#99004d',
        '#cc0066',
        '#ff3399',
        '#cc0000',
        '#ff1a1a',
        '#ff6666',
        '#ff0066',
        '#ff3385',
        '#ff6600',
        '#ff751a',
        '#ffa366',
        '#ffcc00',
        '#ffdb4d',
        '#ccff33',
        '#66ff33',
        '#208000',
        '#009933',
        '#00e64d',
        '#99ffbb',
        '#66ccff',
        '#0088cc',
        '#00334d',
        '#6600cc',
        '#400080',
        '#993300',
        '#4d1a00',
    ];
    colors.forEach(color => {
        contianer.appendChild(colorElement(color, (c) => {
            if (changeColor !== undefined) {
                changeColor(c);
                closeColorPicker();
            }
        }));
    });
    document.body.appendChild(contianer);
}
