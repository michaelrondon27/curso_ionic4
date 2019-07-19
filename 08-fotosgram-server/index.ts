import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from "./routes/post";

const server = new Server();

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Rutas de mi app
server.app.use('/user', userRoutes);
server.app.use('/post', postRoutes);

// Conectar DB
mongoose.connect(
    'mongodb://localhost:27017/fotosgram',
    {
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err) => {
        if ( err ) throw err;

        console.log('Base de datos ONLINE');
    }
);

// Levantar express
server.start( () => {

    console.log(`servidor corriend en puerto ${ server.port}`);

});