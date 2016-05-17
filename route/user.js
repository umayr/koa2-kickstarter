'use strict';

import Router from 'koa-router';
import Errors from 'boom';

import * as Ctrl from '../controller/user';

const router = new Router({
    prefix: '/user'
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/', Ctrl.put);

export const Routes = router.routes();

export const AllowedMethod = router.allowedMethods({
    throw: true,
    notImplemented: () => new Errors.notImplemented(),
    methodNotAllowed: () => new Errors.methodNotAllowed()
});