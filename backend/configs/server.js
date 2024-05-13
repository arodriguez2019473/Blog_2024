'use strict'
import bcryptjs from 'bcryptjs';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js'

import comentarioRoutes from '../src/comentario/comentario.routes.js'
import publicacionRoutes from '../src/Publicacion/publicacion.routes.js'


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.comentarioPath = '/blog/v1/comentario'
        this.publicacionPath = '/blog/v1/publicacion'

        this.conectarDB();
        this.middlewares();
        this.routes();
        
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){

        this.app.use(this.comentarioPath, comentarioRoutes);
        this.app.use(this.publicacionPath, publicacionRoutes);

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running and listening to port', this.port)
        })
    }

}

export default Server;