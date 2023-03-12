var arr=[2,7,11,15];
var target =9
var sum=0;
for(var i=0;i<arr.length;i++){
  for(var j=i+1;j<arr.length-1;j++){
    sum=arr[i]+arr[j];
    if(sum == target){
     console.log([i,j]);
      break;
      
    }

  }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var row = [];
  nums.forEach(function(item, index){
      nums.forEach(function(item2, index2){
          const sum = item + item2;
          if(sum == target){
              row.push(index);
              break;
          }
      });
  });
  return row;
};

var string = "Ashish";
var count = 0;

for(i=0; i<string.length; i++){
  for(j=0; j<string.length; j++){
    if(string[i] == string[j]){
      console.log(string[i], string[j]);
      break;
    }
  }
}


var string = "Ashish";
var charFrequency = {};

for (var i=0; i<string.length; i++) {
  charFrequency[string[i]] = charFrequency[string[i]] ? charFrequency[string[i]] + 1 : 1;
}

console.log(charFrequency);
