var count1 = 0;
var t;
var timer_is_on = 0;

let counterDisplayElem1 = document.getElementById('currentValue1');
let counterStart = document.getElementById('increase1');
let counterPause = document.getElementById('decrease1');
let counterReset1 = document.getElementById('resetCount1');


updateDisplay1();

counterStart.addEventListener("click", () => {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
});

counterPause.addEventListener("click", () => {
    stopCount();
});

counterReset1.addEventListener("click", () => {
    count1 = 0;
    updateDisplay1();
    stopCount();
});


function updateDisplay1() {
    counterDisplayElem1.innerHTML = count1;
};

function timedCount() {
    document.getElementById('currentValue1').value = count1;
    count1 = count1 + 1;
    t = setTimeout("timedCount()", 1000);
    updateDisplay1();
}

function doTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
    document.getElementById('currentValue1').value = count1;
}
