
import { ConnectionOptions } from "typeorm";
import * as _ from 'lodash';


const {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME
} = process.env;

export const DATABASE_CONFIG: ConnectionOptions = {
  database: _.toString(DATABASE_NAME),
  host: _.toString(DATABASE_HOST),
  username: _.toString(DATABASE_USERNAME),
  password: _.toString(DATABASE_PASSWORD),
  port: _.toNumber(DATABASE_PORT),
  synchronize: true,
  type: "postgres",
  entities: [process.cwd() + "/src/modules/**/**.entity{.ts,.js}"],
};

