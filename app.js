import express from "express";
import http from 'http';
import router from './routes/main.js'

const app = new express();

app.use('/', router);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT, HOST);