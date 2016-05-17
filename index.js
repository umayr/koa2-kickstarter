'use strict';

import Koa from 'koa';
import Debug from 'debug';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import conf from './conf';
import * as User from './route/user';

const app = new Koa();
const debug = Debug('koa-play:root');

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());

app.use(async (ctx, next) => {
    ctx.log.info(`request from ${ctx.request.ip} to ${ctx.path}`);
    await next();
});

app.use(async(ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.log.error(error);

        if (error.isBoom) {
            ctx.body = error.output.payload;
            ctx.status = error.output.statusCode;

            return;
        } else {
            // TODO: Handle error that are not instance of `boom`
        }
        throw error;
    }
});

// Registers routes and allowed method middleware for different routes
// FIXME: This should be simplified
app.use(User.Routes);
app.use(User.AllowedMethod);

debug('current environment: %s', conf.get('env'));
debug('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
