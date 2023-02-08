import express from 'express';
import cors from 'cors';
import {router} from '../routes/usuarios.js';


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;  
        this.usuariosPath = '/api'      
        // Midelware
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura y parceo del body
        this.app.use(express.json());

        // Indico mi acceso publico
        this.app.use(express.static('public'))
    }

    // endpoints
    routes(){
        this.app.use(this.usuariosPath, router);
    }

    // Ejecucion del servidor
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        });
    }

}

export { Server }