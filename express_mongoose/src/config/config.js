import Joi from 'joi';
import path from 'path';
import dotenv from 'dotenv';

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number().default(4040),
  MONGOOSE_DEBUG: Joi.boolean().when('NODE_ENV', {
    is: Joi.string().equal('development'),
    then: Joi.boolean().default(true),
    otherwise: Joi.boolean().default(false),
  }),
  MONGO_HOST: Joi.string()
    .required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
  MONGO_USER: Joi.string()
    .description('Mongo DB user name'),
  MONGO_PASSWORD: Joi.string()
    .description('Mongo DB password'),
  MONGO_DATABASE: Joi.string()
    .required()
    .description('Mongo DB data base name'),
})
  .unknown()
  .required();

const envPath = path.join(__dirname, '../../.env');
dotenv.config({path: envPath});

const {error, value: envVars} = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
    user: envVars.MONGO_USER,
    password: envVars.MONGO_PASSWORD,
    database: envVars.MONGO_DATABASE,
  },
};

export default config;
