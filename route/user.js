'use strict';

import Router from 'koa-router';
import * as Ctrl from '../controller/user';

const router = new Router({
    prefix: '/user'
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/', Ctrl.put);

export const Routes = router.routes();
// TODO: add boom support for errors: https://github.com/hapijs/boom
export const AllowedMethod = router.allowedMethods();