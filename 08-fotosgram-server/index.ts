import Server from "./classes/server";

const server = new Server();

// Levantar express
server.start( () => {

    console.log(`servidor corriend en puerto ${ server.port}`);

});