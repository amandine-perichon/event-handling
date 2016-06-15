// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  changeDivColor('one', 'blue', 'white');
  changeDivColor('two', 'green', 'white');
  changeDivColor('three', 'orange', 'white');
  changeDivText('four');
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeColor('blue'))

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeColor('white'))
}

// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION four HERE

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}


// Avoid repetition by creating a function that takes a color in parameter
// and returns a function that takes an event in parameter

function makeColor (color) {
  return function (evt) {
    evt.target.style.backgroundColor = color;
  }
}

// Avoid repetition by creating a function that takes an id and two colors in parameters 

function changeDivColor (id, colorEnter, colorLeave) {
  var elem = document.getElementById(id);
  elem.addEventListener('mouseenter', makeColor(colorEnter));
  elem.addEventListener('mouseleave', makeColor(colorLeave));
}


// Function to change the text of a div

function changeDivText (id) {
  var elem = document.getElementById(id);
  elem.addEventListener('click', addText)
}

function addText (evt) {
  console.log()
  if (evt.target.innerHTML === "") {
    evt.target.innerHTML = "This is not a div";
  } else {
    evt.target.innerHTML = "";
  }
  }