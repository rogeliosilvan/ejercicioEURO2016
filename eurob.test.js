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
    // console.log(players)
    t.is(typeof players, 'object');
})

test('getPlayersByTeam should return true if the Name of a one player is Iker Casillas', async t => {
    const players = await EuroDB.getPlayersByTeam('spain')
    // console.log(players.sheets.Players.find(player => player.name === 'Iker Casillas'));
    // t.not(players.sheets.Players.find(player => player.name === 'Iker Casillas'),null);
    t.is(!!players.sheets.Players.find(player => player.name === 'Iker Casillas'),true);
})

test('getPlayersByTeam should return 404 if the teams name is not found', async t => {
    const players = await EuroDB.getPlayersByTeam('norway')
    // console.log(players)
    t.is(players,404);
})

test('getPlayersByTeam should return null if the teams name is not found', async t => {
    const players = await EuroDB.getPlayersByTeam(null)
    // console.log(players)
    t.is(players,404);
})

test('findPlayer should return the object named Iker Casillas from the spain team', async t => {
    let player = await EuroDB.findPlayer({name: "Iker Casillas"},'spain')
    // console.log(player);
    t.is(player.name,'Iker Casillas');
})

test('findPlayer should return the object position Goalkeeper from the spain team', async t => {
    let player = await EuroDB.findPlayer({position: "Goalkeeper"},'spain')
    // console.log(player);
    t.is(player.position,'Goalkeeper');
})

test('findPlayer should return null when not found this player', async t => {
    let player = await EuroDB.findPlayer({name: "Iter Casillas"},'spain')
    // console.log(player);
    t.is(player,null);
})

test('findPlayer should return null when not found this position', async t => {
    let player = await EuroDB.findPlayer({position: "medico"},'spain')
    // console.log(player);
    t.is(player,null);
})

test('findPlayer should return null if the object name o position is not informed', async t => {
    let player = await EuroDB.findPlayer(null,'spain')
    // console.log(player);
    t.is(player,null);
})

