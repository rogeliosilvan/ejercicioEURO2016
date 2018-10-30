const axios = require('axios')

class EuroDB{

    constructor(){
        this.teams = ["albania",
        "austria",
        "belgium",
        "croatia",
        "czech",
        "england",
        "france",
        "german",
        "hungary",
        "iceland",
        "ireland",
        "italy",
        "northern-ireland",
        "poland",
        "portugal",
        "romania",
        "russia",
        "slovakia",
        "spain",
        "sweden",
        "swiss",
        "turkey",
        "ukraine",
        "wales"]        
    }

    getTeams() {
        return this.teams
    }

    getPlayersByTeam(team){
        
        return axios.get(`https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/${team}-players.json`)
        .then(function(response) {
          return response.data;
        });
    }

    async findPlayer(ObjNamePosition, team){
        const playerTeam = await this.getPlayersByTeam(team);
        // console.log(ObjNamePosition.hasOwnProperty('name'));
        console.log(Object.keys(ObjNamePosition).toString());
        let keyTofind = Object.keys(ObjNamePosition).toString();
        let valueTofind = ObjNamePosition[keyTofind];
        console.log(valueTofind);
        console.log(players.sheets.Players.find(player => player[keyTofind] === valueTofind));
        // console.log(playerTeam.sheets.Players)
        return true;
    }

}

module.exports = new EuroDB();