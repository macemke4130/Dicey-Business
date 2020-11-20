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
        $('#table').append(this.div); // #table is a div container for the .dice objects --
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
        $('#sum-result').text(''); // Clears Output --
    }

    remove() {
        delete diceSet[this.div.attr('id')]; // Empties diceSet array location --
        $('#' + this.div.attr('id')).remove(); // Removes <div> from HTML --
        diceSet = diceSet.filter(function (x) { return x != null; }); // Removes empty array locations --
        for (let index = 0; index < diceSet.length; index++) {
            diceSet[index].id = index; // Renames id of the array Die objects --
            $('.die')[index].id = index; // Renames all of the element ids in the HTML --
        }
        dieCount--; // Decrements dieCount for a Die removal --
        $('#sum-result').text(''); // Clears Output --
    }
}

let $generate = $('#generate-die'); // Button in HTML --
$generate.click(function () {
    if (dieCount < maxDie) { // Limits number of dice on screen --
        // Puts new Die object in the diceSet array and calls generateDie() on that object --
        diceSet[dieCount] = new Die;
        diceSet[dieCount].generateDie();
        $('#sum-result').text(''); // Clears Output --
    }

});

// This random() function has nothing to do with an individual Die so I did not see it neccesary to include it in the class --
function random() { 
    return Math.floor((Math.random() * 6) + 1);
}

let $sum = $('#sum-dice'); // Sum Dice <button> --
$sum.click(function () {
    let addItUp = 0;
    for (let index = 0; index < diceSet.length; index++) {
        let x = diceSet[index].value;
        x = parseInt(x); // Converts string values to numbers --
        addItUp = addItUp + x;
    }
    if (dieCount == 0) {
        $('#sum-result').text('There are no dice to add!');
    } else {
        $('#sum-result').text(`The sum of all dice is ${addItUp}.`);
    }

});

let $roll = $('#roll-dice'); // Roll Dice <button) --
$roll.click(function () {
    if (dieCount == 0) { $('#sum-result').text('There are no dice to roll!'); };
    for (let index = 0; index < diceSet.length; index++) {
        diceSet[index].roll();
    }
});