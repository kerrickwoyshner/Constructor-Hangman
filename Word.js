function Word(word) {
    // convert word (string) to array of Letter Objects
    // how to extract letters from a word in JavaScript
    this.letters = [];
    // loop....
    this.letters.push(new Letter("a"));
}







this.lettersOfTheWord = "";
    this.letterGuessed = [];
    this.matchedLetters = [];
    this.guess = function (letter) {
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                // Push the newly guessed letter into the matchedLetters array.
                return true;
            } else {
                return false;
            }
        }
    }
    this.buildWordView = function () {
        var wordView = "";
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
                wordView += this.lettersOfTheWord[i];
            }
            else {
                wordView += "&nbsp;_&nbsp;";
            }
        }
        console.log("Letters: " + wordView);
    }