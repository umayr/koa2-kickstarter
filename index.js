'use strict';

import Koa from 'koa';
import Debug from 'debug';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';
import requestMiddleware from './middleware/request';
import errorMiddleware from './middleware/error';

import conf from './conf';
import * as User from './route/user';

const app = new Koa();
const debug = Debug('koa-play:root');

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes and allowed method middleware for different routes
// FIXME: This should be simplified
app.use(User.Routes);
app.use(User.AllowedMethod);

debug('current environment: %s', conf.get('env'));
debug('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
