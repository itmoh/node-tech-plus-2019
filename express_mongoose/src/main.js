import mongoose from 'mongoose';
import mongodbUri from 'mongodb-uri';
import config from './config/config';
import app from './config/express';

mongoose.Promise = Promise;

function formatMongooseDbUriFromEnv(mongoConfig) {
    return mongodbUri.formatMongoose({
        scheme: 'mongodb',
        hosts: [
            {
                host: mongoConfig.host,
                port: mongoConfig.port
            }
        ],
        username: mongoConfig.user,
        password: mongoConfig.password,
        database: mongoConfig.database,
    });
}
// connect to mongo db
// const mongoUri = formatMongooseDbUriFromEnv(config.mongo);
// mongoose.connect(mongoUri, {
//     server: { socketOptions: { keepAlive: 1 } },
//     useMongoClient: true,
// });
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });

if (!module.parent) {
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

export default app;
