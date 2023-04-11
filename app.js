const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const server = require('http').createServer(app)

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/start.html');
});

app.get('/home', (req, res) => {
   res.sendFile(__dirname + '/home.html');
});

app.get('/mylife', (req, res) => {
   res.sendFile(__dirname + '/mylife.html');
});

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/about.html');
});

app.get('/aboutme', (req, res) => {
   res.sendFile(__dirname + '/aboutme.html');
});

app.get('/photography', (req, res) => {
   res.sendFile(__dirname + '/life/photography.html');
});

app.get('/running', (req, res) => {
   res.sendFile(__dirname + '/life/running.html');
});

app.get('*', function(req, res){
   res.status(404).sendFile(__dirname + '/public/error/404.html');
   res.status(500).sendFile(__dirname + '/public/error/500.html');
});

server.listen(PORT, () => {
   console.log('Server is running on port: ' + PORT);
});