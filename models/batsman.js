const Player = require("./player");

class Batsman extends Player {
    constructor(id, name, age, basePrice, soldPrice) {
        super(id, name, age, "Batsman", basePrice, soldPrice);
    }
}

module.exports = Batsman;