window.onload = function () {
    initColorPicker();
};

function initColorPicker () {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        blue: document.getElementById("blue"),
        green: document.getElementById("green")
    };
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("Red value: ", rgb.red.value);
    })
}