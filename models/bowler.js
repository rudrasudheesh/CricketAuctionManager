const Player = require("./player");

class Bowler extends Player {
    constructor(id, name, age, basePrice, soldPrice) {
        super(id, name, age, "Bowler", basePrice, soldPrice);
    }
}

module.exports = Bowler;