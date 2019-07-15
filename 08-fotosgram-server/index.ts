import Server from "./classes/server";
import userRoutes from "./routes/usuario";

const server = new Server();

// Rutas de mi app
server.app.use('/user', userRoutes);

// Levantar express
server.start( () => {

    console.log(`servidor corriend en puerto ${ server.port}`);

});