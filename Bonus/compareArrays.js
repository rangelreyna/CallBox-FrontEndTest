var array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
var array_two = ["dog", "goose", "kite", "meal", "laptop"];
var array_common = [];

function findCommonItems(array_one, array_two){
  return array_one.filter(item => array_two.indexOf(item) !== -1);
}

// get common array items 
array_common = findCommonItems(array_one, array_two);
console.log(array_common)

// print each item separately - wasn't sure if needed to be printed individually or as array
for (let i = 0; i < array_common.length; i++){
  console.log(array_common[i]);
}