/**
 * Created by Пользователь on 23.08.2016.
 */
var target_index;
var target;
var guess_input;
var colors = ["tomato", "orange", "green", "cyan"];
var finished = false;
var guesses = 0;
var myBody;

function do_game() {
    target_index = Math.floor(Math.random() * 4);
    target = colors[target_index];
    alert(target);
    while(!finished) {
        guess_input = prompt("I'm thinking of one of these colors:\n" + colors.sort().join(", ") +
            "\nWhat color am I thinking of?", "");
        guesses++;
        finished = check_guess();
    }
}

function check_guess() {
    while (!finished) {
        if (colors.indexOf(guess_input) == -1) {
            alert("Sorry, I don't recognize your color.\n" +
            "Please try again.");
            return false;
        }
        if (guess_input < target) {
            alert("Sorry, your guess is not correct!\n" +
                "Hint: your color is alphabetically higher than mine\n" +
                "Please try again.");
            return false;
        }
        if (guess_input > target) {
            alert("Sorry, your guess is not correct!\n" +
                "Hint: your color is alphabetically lower than mine\n" +
                "Please try again.");
            return false;
        }
        if (guess_input == target) {
            myBody = document.getElementsByTagName("body")[0];
            myBody.style.background = target;
            alert("Congratulations! You have guessed the color!\n" +
                "It took you " + guesses + " guesses to finish the game\n" +
                "You can see the color in the background.");
            return true;
        }
    }
}