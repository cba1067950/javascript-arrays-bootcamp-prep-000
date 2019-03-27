var chocolateBars = ["snikers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift[element];
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function addElementToEndofArray(array, element){
  array = [...array, element];
  return array;
}
