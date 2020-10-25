let counterDisplayElem = document.getElementById('currentValue');
let counterMinusElem = document.getElementById('decrease');
let counterPlusElem = document.getElementById('increase');
let counterReset = document.getElementById('resetCount');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {

    count++;
    updateDisplay();

});

counterMinusElem.addEventListener("click", () => {
    if (count != 0) {
        count--;
        updateDisplay();
    }
});

counterReset.addEventListener("click", () => {

    count=0;
    updateDisplay();
});



function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};
