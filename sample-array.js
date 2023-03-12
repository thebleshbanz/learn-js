// const options = ["Fouji","Modi","India", "love", "Army"];
const options = [
    [ "Add", "Addition"],
    [ "Sub", "Substraction"],
    [ "Multi", "Multification"],
    [ "Divid", "dividation"],
    {
        add : (a,b) => {
            return a+b;
        }
    }
 ];

 //  Total length of array
console.log("array length - " + options.length);

// Adding Array Elements
options.push("Yodha");

// add new elements using length properties
options[options.length] = "AgniVeer";

// console.log(options.add(12+12)); return;


options.forEach(function(value) {
    console.log("Type "+value[0]+" For "+value[1]);

});

console.log( Array.isArray (options) );
console.log( typeof options );
