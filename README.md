## `koa2-kickstarter`
> An opinionated boilerplate for koa v2 with batteries included.

### Setup
```bash
  # clone the repository
  λ git clone https://github.com/umayr/koa2-kickstarter
  # change the current directory
  λ cd koa2-kickstarter
  # install all dependencies
  λ npm install
  # run the project
  λ npm start
```

### Structure
```bash
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── conf            # wraps configurations files
│   ├── controller      # contains all controllers in the application
│   ├── middleware      # folder with all middlewares
│   ├── route           # wraps all the routes and exports a single composed middleware
│   └── service         # contains all the service logic
└── test                # unit tests
```

**Suggestion:** Every folder name is _singular_ like `route`, `middleware` instead of `routes`, `middlewares`. If you want to add more folders as per your need, make sure they should be singular too (for e.g. `util`, `helper` etc) only for the sake of consistency.

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Ava](https://github.com/avajs/ava) For unit tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [Babel](https://github.com/babel/babel) Support ES6/ES7 features.
- [ESLint](https://github.com/eslint/eslint/) Linting purposes (comes with extended Airbnb's base eslint configurations).
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).

And many more small packages.

### Scripts

- `npm start` - simply starts the server
- `npm test` - execute all unit tests
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - starts the server with hot-reloading

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`

### License

[MIT](https://raw.githubusercontent.com/umayr/koa2-kickstarter/master/LICENSE?token=AC7fzOqmYJf5mPTsJ9sWZ6QPNSfuBhLlks5XROMFwA%3D%3D) - Umayr Shahid <<umayrr@hotmail.co.uk>>
