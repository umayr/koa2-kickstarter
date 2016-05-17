'use strict';

import Koa from 'koa';
import json from 'koa-json';
import Debug from 'debug';

import * as User from './route/user';

const app = new Koa();
const debug = Debug('koa-play:root');

// Register middleware to handle json
app.use(json());

app.use(async(ctx, next) => {
    try {
        await next();
    } catch (error) {
        debug('error occurred: %j', error);
        
        if (error.isBoom) {
            ctx.body = error.output.payload;
            ctx.status = error.output.statusCode;

            return;
        }
        throw error;
    }
});

// Registers routes and allowed method middlewares for different routes
app.use(User.Routes);
app.use(User.AllowedMethod);

debug('server started at port: %d', 4000);
app.listen(4000);
