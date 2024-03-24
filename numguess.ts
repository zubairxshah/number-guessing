import inquirer from "inquirer";

const randNumber = Math.floor(Math.random()*3+1);
const userInput = await inquirer.prompt ({
    name : "input",
    type : "number",
    message : "Guess any number from 1 to 3 to win the game..",
});


if (randNumber === userInput.input) {
    console.log("Congratulation! You Win..")
} else {
    console.log(`Sorry! The correct number is ${randNumber}.`);
};
