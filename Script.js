window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        blue: document.getElementById("blue"),
        green: document.getElementById("green")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
    for (let i = 0; i < pickerElements.length; i++) {
        pickerElements[i].addEventListener('change', () => {
            console.log("Red value: ", rgb.red.value);
            let red = rgb.red.value;
            let blue = rgb.blue.value;
            let green = rgb.green.value;
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }



function setBoxBGColor(colorBox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbVal = ")";
}

    function setDisplayValues(red, green, blue) {
        let redVal = document.getElementById("redVal");
        let greenVal = document.getElementById("greenVal");
        let blueVal = document.getElementById("blueVal");
    }