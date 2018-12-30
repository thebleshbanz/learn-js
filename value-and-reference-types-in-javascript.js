
/*======================================================================== */
                    /*******    Primitives  *******/
//primitive type is assigned to a variable
var x = 10;
var y = 'abc';
var z = null;
//copy the value to the new variable
var x = 10;
var y = 'abc';
var a = x;
var b = y;
console.log('x, y, a, b => '+x, y, a, b); // -> 10, 'abc', 10, 'abc'
//Changing one does not change the other. 
//Think of the variables as having no relationship to each other
var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log('x, y, a, b => '+x, y, a, b); // -> 10, 'abc', 5, 'def'

/*======================================================================== */

                    /*******    Objects  *******/
console.log('-----------------------------------');
/*Variables that are assigned a non-primitive value are given a reference to that value. 
That reference points to the object’s location in memory. 
The variables don’t actually contain the value. */

//When we assign and use a reference-type variable
var arr = [];
arr.push(1);
console.log('arr => ' + arr);

/* Assigning by Reference */
var reference = [1];
var refCopy = reference; //Objects are copied by reference instead of by value
var refCopy2 = reference;
var refCopy3 = reference;//Each variable now contains a reference to the same array.

reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]

/* Reassigning a Reference */
var obj = { first: 'reference' };
console.log(obj);
obj = { second: 'ref2' } //Reassigning a reference variable replaces the old reference.
console.log(obj);

/*======================================================================== */

                    /*******    == and ===  *******/

/* When the equality operators, == and ===, are used on reference-type variables, they check the reference. 
If the variables contain a reference to the same item, the comparison will result in true. */

var arrRef = ['Hi!'];
var arrRef2 = arrRef;
console.log('-----------------------------------');
console.log(arrRef === arrRef2); // -> true

/*If they’re distinct objects, even if they contain identical properties, the comparison will result in false. */
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2); // -> false

// turn them both into strings and compare
var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1str === arr2str); // true

/*======================================================================== */

            /*******    Passing Parameters through Functions  *******/

/*When we pass primitive values into a function, the function copies the values into its parameters. 
It’s effectively the same as using =. */
var hundred = 100;
var two = 2;
function multiply(x, y) {
    // PAUSE
    return x * y;
}
var twoHundred = multiply(hundred, two);
console.log('-----------------------------------');
console.log('twoHundred ' + twoHundred);

/*======================================================================== */

            /*******    Pure Functions  *******/

//functions that don’t affect anything in the outside scope as pure functions.

//Let’s go into an example of a pure vs. impure function.

function changeAgeImpure(person) {
    person.age = 25;
    return person;
}
var alex = {
    name: 'Alex',
    age: 30
};
console.log('-----------------------------------');
// console.log(alex); // -> { name: 'Alex', age: 30 }
var changedAlex = changeAgeImpure(alex);
console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }


/* pure function */
function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person)); // transform the object we’re passed into a string, and then parse it back into an object with JSON.parse
    newPersonObj.age = 25; //result in a new variable
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log('-----------------------------------');
console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }

/*======================================================================== */

            /*******    Test Yourself     *******/

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

console.log('-----------------------------------');

var personObj1 = {
    name: 'Alex',
    age: 30
};
var person = personObj1;
person.age = 25;
person = {
  name: 'john',
  age: 50
};
var personObj2 = person;
console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: '50' }
