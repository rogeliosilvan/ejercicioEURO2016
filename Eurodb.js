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
        }).catch(
            function(response){
                // console.error("Promesa Asíncrona numero ("+response+") - ERROR FATAL");
                // console.log(response.response.status);
                return response.response.status;
          });
    }

    async findPlayer(ObjNamePosition, team){
        let playerTeamFiltered = null;
        if(!ObjNamePosition) return null;
        const playerTeam = await this.getPlayersByTeam(team);
        playerTeamFiltered = playerTeam.sheets.Players.filter(player => player[Object.keys(ObjNamePosition).toString()] === ObjNamePosition[Object.keys(ObjNamePosition).toString()])
        // console.log("Esto es: playerTeamFiltered");
        // console.log(playerTeamFiltered.length)
        //return playerTeamFiltered.length <= 0 ? null : playerTeamFiltered[0]
        return playerTeamFiltered.length <= 0 ? null : playerTeamFiltered
    }

    async findPlayerAll(ObjNamePosition){
        
        let playerTeam = await this.findPlayer(ObjNamePosition, 'italy');
        return playerTeam.length <= 0 ? null : playerTeam
    }  
    
    // async findPlayerAll_v2(ObjNamePosition){
        
    //     let playerAllTeams = null;
    //     playerAllTeams.push(this.getTeams().map(function (member) {
    //         //  return member.name 
    
    //         let playerTeam = await this.findPlayer(ObjNamePosition, member);
    //         return playerTeam.length <= 0 ? null : playerTeam            
    //     }))
    
    //     return playerAllTeams.length <= 0 ? null : playerAllTeams   
    // }        

      

}

module.exports = new EuroDB();