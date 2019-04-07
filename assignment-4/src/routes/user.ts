import express = require('express');
import { logger } from '../logger';
import { join } from 'path';
import {fileName} from '../util/path'


const router: express.Router = express.Router();

const users: Array<any> = [];

router.get('/add-user', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.debug('Rendering add user page.');
    res.render('add-user', {
        pageTitle: 'Add User',
        path: '/admin/add-user',
        userActive: true,
        userCSS: true,
        formsCSS: true
    });
});

router.post('/add-user', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.debug('Adding user to list.');
    users.push({
        name: req.body.name
    });
    logger.info('Redirecting.');
    res.redirect('/');
});

export {router, users}

