const prompt = require('prompt');
// Start Prompt
prompt.start();

const options = [
    [ "add", "Addition"],
    [ "sub", "Substraction"],
    [ "nulti", "Multiplication"],
    [ "divid", "Division"]
];

console.log('Welcome to my calculator');

options.forEach(function(value) {
    console.log( `"Type ${value[0]} For ${value[1]}"`);
});



// programe to calculate numbers
function calculate(){

    prompt.get(['action'], function (err, result) {
        const action = result.action;
        if(action != undefined){

            // Switch case
            switch (action) {

                case 'add':
                    var numbers = [1,2,3,4,5];
                    addition(numbers);
                    break;

                case 'sub':
                    var numbers = [123,45];
                    substraction(numbers);
                    break;

                case 'multi':
                    var numbers = [12,12];
                    multiplication(numbers);
                    break;

                case 'divide':
                    var numbers = [12,2];
                    division(numbers);
                    break;

                default:
                    break;
            }

            calculate();
            // console.log(`calculation is ${action}`);
        }
    });

    // descrease the number value
    // const newNumber = number - 1;
}

calculate();


function addition(values) {
    var final = 0;
    var numbers_str  = '';

    values.forEach(function(value) {
        numbers_str = numbers_str.concat("+", value);
        final = final + value;
    });
    console.log(`addition of "${numbers_str}" is ${final}`);
}

function substraction(values) {
    var final = 0;
    var numbers_str  = '';
    values.forEach(function(value) {
        numbers_str = numbers_str.concat("-", value);
        final = value - final;
    });
    console.log(`substraction of "${numbers_str}" is ${final}`);
}

function multiplication(values) {
    var final = 1;
    var numbers_str  = '';
    values.forEach(function(value) {
        numbers_str = numbers_str.concat("x", value);
        final = value * final;
    });
    console.log(`multiplication of "${numbers_str}" is ${final}`);
}

function division(values) {
    var final = 1;
    var numbers_str  = '';
    numbers_str = `${values[0]} , ${values[1]} `;
    final = values[0] / values[1];
    console.log(`division of "${numbers_str}" is ${final}`);
}