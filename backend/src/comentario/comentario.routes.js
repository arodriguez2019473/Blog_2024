import { Router } from "express";

import {
    comentarioPost,
    comentarioGetId
} from './comentario.controller.js';

const router = Router();

router.post('/', comentarioPost);

router.get('/',

    comentarioGetId);

export default router;
