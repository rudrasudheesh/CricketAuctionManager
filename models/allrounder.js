const Player = require("./player");

class AllRounder extends Player {
    constructor(id, name, age, basePrice, soldPrice) {
        super(id, name, age, "AllRounder", basePrice, soldPrice);
    }
}

module.exports = AllRounder;