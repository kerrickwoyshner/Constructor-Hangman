function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}
// getLetter to string insteads
Letter.prototype.getLetter = function() {
    if(this.guessed) {
        return this.letter;
    } else {
        return "_";
    }
};

Letter.prototype.guess = function(letter) {
    if(this.letter === letter) {
        this.guessed = true;
    }
}

module.exports = Letter;
