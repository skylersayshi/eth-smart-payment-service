import express from 'express';

import {getUsers, createUser} from '../controllers/users.js'

const router = express.Router();


router.get('/you', getUsers);
router.post('/new', createUser);

export default router;