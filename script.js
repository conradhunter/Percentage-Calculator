const calculateButtonOne = document.getElementById('btn1');
const calculateButtonTwo = document.getElementById('btn2');
const calculateButtonThree = document.getElementById('btn3');

// Box One => what is ''% of #

const boxOneLeft = document.getElementById('boxOne-left');
const boxOneRight = document.getElementById('boxOne-right');
const boxOneOutput = document.getElementById('boxOne-output');

function calculateBoxOne() {
    const boxOneCalculation = (boxOneLeft.value * boxOneRight.value) / 100; 
    boxOneOutput.value = boxOneCalculation;
}

// Box Two => # is what percentage of #

const boxTwoLeft = document.getElementById('boxTwo-left');
const boxTwoRight = document.getElementById('boxTwo-right');
const boxTwoOutput = document.getElementById('boxTwo-output');

function calculateBoxTwo() {
    const boxTwoCalculation = (boxTwoLeft.value * 100) / boxTwoRight.value + '%';
    boxTwoOutput.value = boxTwoCalculation;
}

// Box Three => Percentage increase/decrease from # to #

const boxThreeLeft = document.getElementById('boxThree-left');
const boxThreeRight = document.getElementById('boxThree-right');
const boxThreeOutput = document.getElementById('boxThree-output');

function calculateBoxThree() {

    if (boxThreeLeft.value < boxThreeRight.value) {
        const boxThreeIncreaseCalc = (boxThreeRight.value - boxThreeLeft.value) / boxThreeLeft.value * 100 + '%';
        boxThreeOutput.value = boxThreeIncreaseCalc;
    } 

    else if (boxThreeLeft.value > boxThreeRight.value) {
        const boxThreeDecreaseCalc = '-' + (boxThreeLeft.value - boxThreeRight.value) / boxThreeLeft.value * 100 + '%';
        boxThreeOutput.value = boxThreeDecreaseCalc;
    }

}


function clearCalculator() {
    location.reload();
}