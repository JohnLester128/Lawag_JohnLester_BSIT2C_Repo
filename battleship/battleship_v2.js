var randomLoc = Math.floor(Math.random() *5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while (isSunk == false){
    guess = prompt("Ready!, Aim, Fire! (Enter a number 0-6): ");

    if (guess == null) {
        alert("Thank you for playing!");
        break;
    }

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }else {
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            alert ("hits")
            if (hits == 3) {
                inSunk = true;
                alert("You sank my battleship!")
            }
        }
        else{
            alert("Miss!")
            if (guesses >= 10) {
                alert("You exceeded the maximum attempts!");
                break;
            }
        }
    }
}

var accuracy = (guess > 0 ? (hits / guess) * 100 : 0). toFixed(3);

var stats = "You took " +guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";

var stats = "You sank my battleship at: " + guesses + "guesses" + "and your accuracy is: " + (3/guesses);

alert(stats);