const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const { setupWebSocket } = require('./webSocket');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://davi:davi@cluster0-wtj9f.gcp.mongodb.net/dev-radar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());

app.use(express.json());

app.use(routes);

server.listen(3333, () => {
  console.log('Server started on port 3333');
});
