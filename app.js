const Batsman = require("./models/batsman");
const Bowler = require("./models/bowler");
const AllRounder = require("./models/allrounder");
const Team = require("./models/team");

const AuctionUtil = require("./utils/auctionutil");

const playersData = require("./testdata.json");

const team1 = new Team("Team A");
const team2 = new Team("Team B");

let auctionPlayers = [];

playersData.forEach((playerData) => {
    let player;

    if (playerData.role === "Batsman") {
    player = new Batsman(
        playerData.id,
        playerData.name,
        playerData.age,
        playerData.basePrice,
        playerData.soldPrice
    );
} else if (playerData.role === "Bowler") {
    player = new Bowler(
        playerData.id,
        playerData.name,
        playerData.age,
        playerData.basePrice,
        playerData.soldPrice
    );
} else if (playerData.role === "AllRounder") {
    player = new AllRounder(
        playerData.id,
        playerData.name,
        playerData.age,
        playerData.basePrice,
        playerData.soldPrice
    );
}

   AuctionUtil.convertNameToUpperCase(player);

auctionPlayers.push(player);
});

auctionPlayers.forEach((player, index) => {
    if (index < 5) {
        team1.addPlayer(player);
    } else {
        team2.addPlayer(player);
    }
});

console.log("FINAL AUCTION RESULT");
console.log("ID\tNAME\t\t\tROLE\t\tTEAM SOLD TO");

auctionPlayers.forEach((player) => {
    console.log(
        `${player.id}\t${player.name}\t${player.role}\t${player.teamSoldTo}`
    );
});