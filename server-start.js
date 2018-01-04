process.env.NODE_ENV= process.env.NODE_ENV || 'development'
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040'
process.env.SERVER_HOST= process.env.SERVER_HOST || '0.0.0.0'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://areales:JuniorPassword!1@ds237707.mlab.com:37707/ar'
process.env.MONGO_PORT='37707'
require('babel-register');
require("babel-polyfill");
require('./server');
