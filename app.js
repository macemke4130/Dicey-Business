let dieCount = 0;
let diceSet = [];
//let diceObj = [];
const maxDie = 4;

class Die {
    constructor() {
        this.div = $('<div></div>');
    }

    generateDie() {
        this.div.attr('id', dieCount);
        this.div.attr('value', random());
        this.div.text(this.div.attr('value'));
        this.div.addClass('die d-flex align-items-center justify-content-center m-2');
        $('#table').append(this.div);
        dieCount++;
    }

    roll() {

    }
}

function random() {
    return Math.floor((Math.random() * 6) + 1);
}

let $generate = $('#generate-die'); // Button in HTML --
$generate.click(function () {
    if (dieCount < maxDie) {
        diceSet[dieCount] = new Die;
        diceSet[dieCount].generateDie();
    }
});

let addItUp = 0;
let $sum = $('#sum-dice');
$sum.click(function () {
    for (let index = 0; index < diceSet.length; index++) {
        let x = diceSet[index].div.text();
        x = parseInt(x); // Converts string values to numbers --
        addItUp = addItUp + x;
    }
    console.log(addItUp);
    addItUp = 0; // Reset for multiple clicks --
});