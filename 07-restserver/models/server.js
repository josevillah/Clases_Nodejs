import express from 'express';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Midelware
        this.midelware();

        // Rutas de mi app
        this.routes();
    }

    midelware(){
        this.app.use(express.static('public'))
    }


    routes(){
        this.app.get('/',(req, res) => {
            res.send('Hello World');
        })
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        });
    }

}

export { Server }