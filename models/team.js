class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
        player.teamSoldTo = this.teamName;
    }
}

module.exports = Team;