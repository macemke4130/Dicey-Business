let dieCount = 0;
let diceSet = [];
const maxDie = 4;

class Die {
    constructor() {
        this.div = $('<div></div>');
        this.value = random();
    }

    generateDie() {
        this.div.attr('id', dieCount);
        this.div.text(this.value);
        this.div.addClass('die d-flex align-items-center justify-content-center m-2');
        $('#table').append(this.div);
        dieCount++;

        this.div.click(function () {
            diceSet[this.id].roll();
        });
        this.div.dblclick(function () {
            diceSet[this.id].remove();
        });
    }

    roll() {
        this.value = random();
        this.div.text(this.value);
    }

    remove(x) {
        delete diceSet[this.div.attr('id')];
        $('#' + this.div.attr('id')).remove();
        console.log(diceSet);
        
        dieCount--;
    }
}

let $generate = $('#generate-die'); // Button in HTML --
$generate.click(function () {
    if (dieCount < maxDie) {
        // Puts new Die object in the diceSet array and calls generateDie() --
        diceSet[dieCount] = new Die;
        diceSet[dieCount].generateDie();
    }
});

function random() {
    return Math.floor((Math.random() * 6) + 1);
}

let $sum = $('#sum-dice'); // Sum Dice <button> --
$sum.click(function () {
    let addItUp = 0;
    for (let index = 0; index < diceSet.length; index++) { // Should be forEach --
        let x = diceSet[index].value;
        x = parseInt(x); // Converts string values to numbers --
        addItUp = addItUp + x;
    }
    console.log(addItUp);
});

let $roll = $('#roll-dice'); // Roll Dice <button) --
$roll.click(function () {
    for (let index = 0; index < diceSet.length; index++) { // Should be forEach --
        diceSet[index].roll();
    }
});