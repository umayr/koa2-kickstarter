'use strict';

export const get = ctx => {
    ctx.body = {response: '[GET]: /user', time: Date.now()};
};

export const post = ctx => {
    ctx.body = '[POST]: /user';
};

export const put = ctx => {
    ctx.body = '[PUT]: /user';
};