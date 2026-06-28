class AuctionUtil {
    static convertNameToUpperCase(player) {
        player.name = player.name.toUpperCase();
    }

    static isAgeValid(player) {
        return player.age > 18;
    }

    static isBasePriceValid(player) {
        return player.basePrice > 0;
    }

    static isSoldPriceValid(player) {
        return player.soldPrice >= player.basePrice;
    }

    static validatePlayer(player) {
        return (
            this.isAgeValid(player) &&
            this.isBasePriceValid(player) &&
            this.isSoldPriceValid(player)
        );
    }
}

module.exports = AuctionUtil;