import mongoose from 'mongoose';
import util from 'util';


// config should be imported before importing any other file
import config from './server/config/config';
import app from './server/config/express';


const debug = require('debug')('express-mongoose-es6-rest-api:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// // plugin bluebird promise in mongoose
// mongoose.Promise = Promise;

// // connect to mongo db
// const mongoUri = config.mongo.host;
// mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });

// // print mongoose logs in dev env
// if (config.MONGOOSE_DEBUG) {
//   mongoose.set('debug', (collectionName, method, query, doc) => {
//     debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//   });
// }
// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912


// DEVELOPMENT
// app.listen(config.port, () => {
//   console.info(`server started on port ${port} (${config.env})`); // eslint-disable-line no-console
// });

// IMPORTANT FOR HEROKU Deployment: listen on port config.port
// when on Heroku, port will be exported to an environment variable available as process.env.PORT
var port = process.env.PORT || '3000';
app.listen(port, () => {
  console.info(`server started on port ${port} (${config.env})`); // eslint-disable-line no-console
});

export default app;
