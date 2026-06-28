class Player {
    constructor(id, name, age, role, basePrice, soldPrice) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = soldPrice;
        this.teamSoldTo = null;
    }
}

module.exports = Player;