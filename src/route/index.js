'use strict';

import compose from 'koa-compose';

// Import all routes
import user from './user';

export default () => compose([
    user()
]);