require('babel-polyfill');
require('isomorphic-fetch');
require('es6-promise').polyfill();

const context = require.context('./test', true, /\.js$/);
context.keys().forEach(context);
