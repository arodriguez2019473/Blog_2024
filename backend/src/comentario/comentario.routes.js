import express from 'express';
import { Router } from "express";

import {
    crearComentario,
    obtenerComentariosPorPublicacion
} from './comentario.controller.js';

const router = Router();

router.post('/', crearComentario);

router.get('/publicaciones/:publicacionId/comentarios',

    obtenerComentariosPorPublicacion);

export default router;
