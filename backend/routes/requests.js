import express from 'express';

import {getRequests, createRequest} from '../controllers/requests.js'

const router = express.Router();


router.get('/', getRequests);
router.post('/new', createRequest);

export default router;