import { getUsers } from '../service/user';

export const get = (ctx) => {
  ctx.body = { users: getUsers(), time: Date.now() };
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
