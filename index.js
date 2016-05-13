'use strict';

import Koa from 'koa';
import json from 'koa-json';
import * as User from './route/user';

const app = new Koa();

// Register middleware to handle json
app.use(json());

// Registers routes and allowed method middlewares for different routes
app.use(User.Routes);
app.use(User.AllowedMethod);

app.listen(4000);
