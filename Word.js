const Letter = require("./Letter");

function Word(word) {
    this.letters = [];
    for(var i = 0; i < word.length; i++) {
        let letter = new Letter(word.charAt(i) );
        this.letters.push(letter);
    }
}

Word.prototype.getWord = function() {
    var word = "";
    for(var i = 0; i < this.letters.length; i++) {
        let letter = this.letters[i];
        // word += letter;
        word += letter.getLetter();
    }
    return word;
}

Word.prototype.guess = function(letter) {
    for(var i = 0; i < this.letters.length; i++) {
        this.letters[i].guess(letter);
    }
};