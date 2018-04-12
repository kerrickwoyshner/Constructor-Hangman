var inquirer = require("inquirer");
const Letter = require("./Letter");
const Word = require("./Word");

function chooseWord() {
    var wordsToChoose = ["gorilla", "giraffe", "mouse", "lion", "bear"];
    randomNumber = Math.round(Math.random() * wordsToChoose.length + 1);
    var randomWord = new Word(wordsToChoose[randomNumber]);
    console.log(randomWord);
    console.log(randomWord.getWord());
    randomWord.guess("l");
};

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