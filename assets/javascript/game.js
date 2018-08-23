var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guesses = [];

var letterToGuess = null;


var numberofguessesLeft = 9;


var wins = 0;
var losses = 0;

var updateNumberOfGuessesLeft = function() {

  document.querySelector("#number-of-guesses-left").innerHTML = numberofguessesLeft;
};

var updateLetterToGuess = function() {

  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuesses = function() {

  document.querySelector("#guesses").innerHTML = guesses.join(", ");
};

var reset = function() {
  numberOfGuessesLeft = 9;
  guesses = [];
  updateLetterToGuess();
  updateNumberOfGuessesLeft();
  updateGuesses();
};


document.onkeydown = function(event) {
  
  numberofguessesLeft--;

  
  var letter = String.fromCharCode(event.which).toLowerCase();

  
  guesses.push(letter);

 
  updateNumberOfGuessesLeft();
  updateGuesses();


  
  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }

  
  if (numberofguessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }
};
