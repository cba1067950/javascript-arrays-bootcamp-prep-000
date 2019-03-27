var chocolateBars = ["snikers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift[element];
}

function addElementToEndofArray(array, element){
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.pop[element];
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
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