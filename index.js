var inquirer = require("inquirer");

function userLetterTyped(letter) {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess: ",
        }
    ]).then(function (response) {
        var userLetter = new userLetterTyped(response.letter);
    });
};