var chocolateBars = ["snikers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}

var myArray[];
addElementToBeginningOfArray(myArray, "Test");
console.dir(myArray);

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift[element];
  return array;
}

function addElementToEndofArray(array, element){
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.pop[element];
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(-1);
}