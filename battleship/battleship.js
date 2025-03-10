// declaring a variable
let location1 = 1;
let location2 = 2;
let location3 = 3;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// game logic
while (isSunk == false){
    guess = prompt("Ready!. Aim!. Fire (Enter a number 0-6): ")
    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number")
    }
    else{
        guess +=1;
        if (guess == location1 || guess == location2 ||guess == location3 ){
            hits +=1;
            alert("Hit!")
            if (hits == 3){
                isSunk = True;
                alert("You sunk my battleship!")
            }  
        }
        else{
            alert("Miss!")
        }
    }
}

let stats = "You sank my battleship at " + guess + "guesses and your accuracy is"+ (3/guess);

alert(stats);