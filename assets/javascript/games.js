
//create an array for the options for the computer choice.
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 // Create variables that hold references to the places in the HTML where we want to display things.
var wins = 0;
var loses = 0;
var letterGuessed = [];
var guessesLeft = 5;

console.log (computerChoice);


 // Create variables that hold references to the places in the HTML where we want to display things.
 
 var userGuess = document.getElementById("userchoice-text");
 var guessLeft = document.getElementById("guess-left");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("loses-text");
 

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   var userGuess = event.key;

   var computerChoice = computerChoice[Math.floor(Math.random() * 26)+1];

     }
     
     //if (letterGuessed === computerGuess) {
if (userGuess === computerChoice) {
        alert("You win!");
        wins = wins + 1;
        showWins();
       

    } else if (guessesLeft === 0) {
        alert("You Lose, Play again.");
        loses = loses +1;
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }


//function to show wins
function showWins() {
    document.getElementById("numWins").wins = wins;
}

//function to show loses
function showloses() {
    document.getElementById("numLoses").loses =loses;
}

//function to show guesses remaining, should prompt the number of guesses left to decrease after each guess made.  I am struggling with getting this to work i think it is due to inconsistencies within my ID and class names.
function showGuessesRemaining() {
    document.getElementById("numGuesses").guessleft = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 5;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();
