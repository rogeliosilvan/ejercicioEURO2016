import test from 'ava'
const EuroDB = require ('./Eurodb')

test('prueba', t =>{
    t.deepEqual({a:1},{a:1});
})

test('getTeams should return a array ', t => {
    const teams = EuroDB.getTeams()
    t.is(Array.isArray(teams),true)
})

test('getTeams should return a array of 24 elements ', t => {
    const teams = EuroDB.getTeams();
    t.is(teams.length,24);
})


test('getPlayersByTeam should return a team is Spain', async t => {
    const players = await EuroDB.getPlayersByTeam('spain')
    console.log(players)
    t.is(typeof players, 'object');
})

test('getPlayersByTeam should return true if the Name of a one player is Iker Casillas', async t => {
    const players = await EuroDB.getPlayersByTeam('spain')
    console.log(players.sheets.Players.find(player => player.name === 'Iker Casillas'));
    // t.not(players.sheets.Players.find(player => player.name === 'Iker Casillas'),null);
    t.is(!!players.sheets.Players.find(player => player.name === 'Iker Casillas'),true);
})

test('find should return true if finds the player in this team', async t => {
    const playersExit = await EuroDB.findPlayer({name: "David de Gea"},'spain')
    // console.log(players.sheets.Players.find(player => player.name === 'Iker Casillas'));
    t.is(playersExit,true);
})
