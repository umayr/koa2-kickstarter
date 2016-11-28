import test from 'ava';
import * as service from '../src/service/user';

test('should return users', t => {
  const users = service.getUsers();

  t.is(users.length, 4);
});

test('should return valid names', t => {
  const [ava, boyd, raylan, winona] = service.getUsers();

  t.not(ava, undefined);
  t.not(boyd, undefined);
  t.not(raylan, undefined);
  t.not(winona, undefined);
});


test('should one valid user name', t => {
  const name = service.getFirstUser();

  t.not(name, undefined);
});
