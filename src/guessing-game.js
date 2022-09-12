class GuessingGame {
    constructor(min, max, match) {
        this.min = 0;
        this.max = 0;
        this.match = 0;

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.match = Math.ceil((this.max - this.min)/2)+this.min
        return this.match;
    }

    lower() {
        return this.max = this.match;
    }

    greater() {
        return this.min = this.match;
    }
}

module.exports = GuessingGame;
