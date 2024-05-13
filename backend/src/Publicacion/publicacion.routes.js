import { Router } from "express";

import {
    publicacionGet,
    publicacionPost,
    getPublicacionById
} from './publicacion.controller.js';

const router = Router();

router.get("/",publicacionGet);

router.post('/', publicacionPost);

router.get(

    '/:id', 
    getPublicacionById);

export default router;
