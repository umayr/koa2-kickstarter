'use strict';

import Koa from 'koa';
import Debug from 'debug';

import jsonMiddleware from 'koa-json';
import loggerMiddleware from 'koa-bunyan-logger';

import requestMiddleware from 'middleware/request';
import errorMiddleware from 'middleware/error';

import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const debug = Debug('koa-play:root');

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());

debug('current environment: %s', conf.get('env'));
debug('server started at port: %d', conf.get('port'));
app.listen(conf.get('port'));
