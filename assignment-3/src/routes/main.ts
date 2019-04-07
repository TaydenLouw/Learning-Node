import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import {fileName} from '../util/path'



const router: express.Router = express.Router();

router.get('/users', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.silly('Inside /add-product middleware!');
    res.sendFile(join(fileName,'views','users.html'));
});

export {router}

