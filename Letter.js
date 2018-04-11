function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.hasBeenGuessed = function() {
    return this.guessed;
};

Letter.prototype.guess = function(letter) {
    if(this.letter === letter) {
        this.guessed = true;
    }
}

module.exports = Letter;