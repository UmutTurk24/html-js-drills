// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = "I am evil";
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');
  let toplist = document.querySelector('#favthings');
  var hobbies = ["Drinking", "Playing Games", "Chilling with Friends", "Binge-Watching"];
  for (let hobby of hobbies){
    let var_hob = document.createElement('li');
    var_hob.innerHTML=hobby;
    toplist.appendChild(var_hob);
  }

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');
  let dogpic = document.querySelector('#picture');
  dogpic.setAttribute("src","https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif")
  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');
  let varStatus = document.querySelector("#codestatus");
  let newImg = document.createElement('img');
  varStatus.innerHTML = ``
  newImg.setAttribute("src","https://www.meme-arsenal.com/memes/4e5a84ee029f4d2316cb7d06c5a9ed07.jpg");
  newImg.setAttribute("style", "height: 200px");
  varStatus.appendChild(newImg);
  // varStatus.innerHTML = `<img src="https://www.meme-arsenal.com/memes/4e5a84ee029f4d2316cb7d06c5a9ed07.jpg" alt = "Cute Pic">`;

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicked
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  let name = informationForm.elements[0].value;
  let lname = informationForm.elements[1].value;
  let car = informationForm.elements[2].value;
  let icecream = informationForm.elements[3].value;
  // let typehuman = informationForm.elements[4].value;
  document.querySelector(`#firstname`).innerHTML = name;
  document.querySelector(`#lastname`).innerHTML = lname;
  document.querySelector(`#chosencar`).innerHTML = car;
  document.querySelector(`#icecreamstatus`).innerHTML = icecream;
  // document.querySelector(`#checks`).innerHTML = typehuman;

  console.log('Form submitted');

  let humanCheck = document.querySelector("#humancheck").checked;
  let coderCheck = document.querySelector("#codercheck").checked;

  document.querySelector(`#checks`).innerHTML = `${humanCheck} ${coderCheck}`;

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Sam Smith is awesome');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  let colorfulText = document.querySelector(`#colorText`);
  colorfulText.setAttribute("style","color: blue");
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function(event) {
  if(event.code == "KeyR"){
    document.querySelector(`#colorText`).style.color = "brown";
  }
  // This is called whenever a user pressed any key.
  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */
 let myList = document.querySelector('.form');

 myList.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  let toDoItem = document.querySelector(`#todo`).value;
  let myTodoList = document.querySelector(`#todos`);
  let newTodo = document.createElement(`li`);
  let delButton = document.createElement(`button`);
  delButton.setAttribute("style", "height: 30; width: 10;");

  delButton.addEventListener('click', function() {
    let myParent = delButton.parentElement;
    myParent.remove();
  });

  
  newTodo.innerHTML = toDoItem;
  myTodoList.appendChild(newTodo);
  newTodo.appendChild(delButton);

});





/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
