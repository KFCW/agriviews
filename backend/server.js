const http = require("http");
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path :" process.env"})

const port = process.env.PORT || 3000;

const server = http.createServer(app)
server.on("listening",()=>{
    console.log(`le serveur tourne sur le port ${port}`)
}) 
server.listen(port)