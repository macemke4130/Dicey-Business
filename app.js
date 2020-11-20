let dieCount = 0;
let diceSet = [];
const maxDie = 4;
class Die {
    constructor() {

    }
    generateDie() {

    }

    
}
function random() {
    return Math.floor((Math.random() * 6) + 1);
}

let $generate = $('#generate-die');
$generate.click(function () {
    if (dieCount < maxDie) {
        diceSet[dieCount] = $('<div></div>');
        diceSet[dieCount].attr('id', dieCount);
        diceSet[dieCount].attr('value', random());
        diceSet[dieCount].text(diceSet[dieCount].attr('value'));
        diceSet[dieCount].addClass('die d-flex align-items-center justify-content-center m-2');
        $('#table').append(diceSet[dieCount]);
        console.log(diceSet[dieCount]);
        dieCount++;
    }
});

let addItUp = 0;
let $sum = $('#sum-dice');
$sum.click(function (){
    for (let index = 0; index < diceSet.length; index++) {
        let x = diceSet[index].text();
        x = parseInt(x); // Converts string values to numbers --
        addItUp = addItUp + x;
    }
    console.log(addItUp);
});