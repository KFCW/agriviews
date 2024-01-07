const http = require("http");
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path : process.env})

/**
 * 
 * @param {*prendre le port en argument} val 
 * @returns retourne le port le bon port notre api
 */
const normalizePort =  val => {
    const port = parseInt(val , 10)

    if(isNaN(port)){
        return val
    }

    if(port >= 0){
        return port
    }
    return false;
};

//Renvoie le port disponible
const port = normalizePort(process.env.PORT || 3000);

// Gere les cas d"erreur de notre application
const errorHandler = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }
    const address = server.address()
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
    switch(error.code){
        case "EACCES":
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
    
}

// Spécifie le port de l'app express
app.set("port", port);
// Créez un serveur
const server = http.createServer(app);

// Ecoute le serveur
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === "string" ? 'pipe' + address : "port" + port;
    console.log("Listening on " + bind)
}) 



