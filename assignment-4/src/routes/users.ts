import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import { fileName } from '../util/path'
import { users } from './user'


const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/',
        hasProducts: users.length > 0,
        usersActive: true,
        usersCSS: true
    });
});

export { router }

