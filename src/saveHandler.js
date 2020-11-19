const saveButton = document.getElementById('save_button');
saveButton.addEventListener('click', () => {
    saveButton.download = "image.png";
    saveButton.href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
});

