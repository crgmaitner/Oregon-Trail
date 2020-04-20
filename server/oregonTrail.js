const express = require('express')
const app = express()
<<<<<<< HEAD
app.use(express.static('client/public'))
const port = 1337

app.use(express.json())
const gameController = require('./controllers/gameController')
const setupController = require('./controllers/setupController')
const topTenController = require('./controllers/topTenController')
const soundController = require('./controllers/soundController')

//////////////////////////////
// Page Requests
//////////////////////////////

=======
app.use(express.static('client/public'));
const port = 1337

>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views' })
})

app.get('/mainmenu', function (req, res) {
    res.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/info', function (req, res) {
<<<<<<< HEAD
    res.sendFile('info.html', {root: './client/views' })
=======
    res.sendFile('info.html', {root: './client/views'})
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
})

app.get('/setup', function (req, res) {
    res.sendFile('setup.html', {root: './client/views'})
})

app.get('/topten', function (req, res) {
    res.sendFile('topten.html', {root: './client/views'})
})

app.get('/trail', function (req, res){
    res.sendFile('trail.html', {root: './client/views'})
})
<<<<<<< HEAD

//////////////////////////////
// API Routes
//////////////////////////////

// Setup APIs
app.route('/api/setup/screen/:id')
    .get(setupController.getScreen)

app.route('/api/setup/profession')
    .put(setupController.saveProfession)

app.route('/api/setup/player')
    .put(setupController.SaveAllPlayerNames)

app.route('/api/setup/start_month')
    .put(setupController.saveStartMonth)

// Game APIs
app.route('/api/game/game')
    .get(gameController.getGameData)

app.route('/api/game/reset')
    .get(gameController.resetGame)

app.route('/api/game/pace')
    .get(gameController.changePace)

app.route('/api/game/update')
	.get(gameController.updateGame)

// Top Ten APIs
app.route('/api/top_ten')
    .get(topTenController.getTopTen)

app.route('/api/top_ten/submit')
    .put(topTenController.addScore)

// Sound APIs
app.route('/api/sound')
    .get(soundController.getSound)
    .put(soundController.setSound)

app.route('/api/sound/reset')
    .get(soundController.resetSound)


=======
    
>>>>>>> 26ebc8509faccafe89770c9e9ab93cc06b77fc2f
app.listen(port, () => console.log(`Listening on port ${port}.`))