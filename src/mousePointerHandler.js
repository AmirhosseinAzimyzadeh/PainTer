const penPointer = document.createElement('div');
// Object.assign(penPointer.style, {
//     position: 'fixed',
//     backgroundColor: 'black',
//     width: `${currentPenWidth}px`,
//     height: `${currentPenWidth}px`,
//     borderRadius: '50%',
//     userSelect: 'none',
// });
// penPointer.addEventListener('click', (e) => { e.preventDefault() })
// document.body.appendChild(penPointer);
// document.addEventListener('mousemove', (e) => {
//     e.stopPropagation();
//     const x = e.clientX;
//     const y = e.clientY;

//     penPointer.style.transform = `translate(${x}px, ${y}px)`;
//     penPointer.style.transformOrigin = `center`;
//     penPointer.style.width = `${currentPenWidth}px`;
//     penPointer.style.height = `${currentPenWidth}px`;
// });