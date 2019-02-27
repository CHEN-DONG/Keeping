
import { ConnectionOptions } from "typeorm";
import * as _ from 'lodash';

import { APP_CONFIG } from "./app.config";

const {
  databaseName,
  databaseHost,
  databasePassword,
  databasePort,
  databaseUsername,
} = APP_CONFIG;

export const DATABASE_CONFIG: ConnectionOptions = {
  database: databaseName,
  host: databaseHost,
  username: databaseUsername,
  password: databasePassword,
  port: databasePort,
  synchronize: true,
  type: "postgres",
  entities: [process.cwd() + "/src/modules/**/**.entity{.ts,.js}"],
};

