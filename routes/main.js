import { Router } from 'express'
import { index, holaMundo, holaNombre } from './default.js';

const router = Router();

router.get('/', index);
router.get('/holaMundo', holaMundo);
router.get('/hola/:name', holaNombre);

export default router;
