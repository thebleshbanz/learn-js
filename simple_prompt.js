const prompt = require('prompt');

// const options = ["Fouji","Modi","India", "love", "Army"];
const options = [
    [ "Add", "Addition"],
    [ "Sub", "Substraction"],
    [ "Multi", "Multification"],
    [ "Divid", "dividation"]
 ];

//  Total length of array
// console.log("array length - " + options.length);

// Adding Array Elements
// options.push("Yodha");

// add new elements using length properties
// options[options.length] = "AgniVeer";


options.forEach(function(value) {
    console.log("Type "+value[0]+" For "+value[1]);

});

/* console.log( Array.isArray (options) );
console.log( typeof options );
 */
// Start Prompt


prompt.start();

//  Get two properties from the user: username & email
prompt.get(['action'], function (err, result) {
    // Log result
    console.log('Command line input received');
    console.log('Action : '+result.action);
    // console.log('Email : '+result.email);
});