import * as _ from 'lodash';

const {
  env: {
    ENVIRONMENT,
    LOGIN_GUARD_ENABLE,
    PORT,
    ROLE_GUARD_ENABLE,
    WEB_HOST,
    APP_HOST,

    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,

    COOKIE_SECRET,
    SESSION_SECRET,

    LOCAL_PASSWORD_FIELD,
    LOCAL_USERNAME_FIELD,

    UPLOAD_PATH_IMAGE,
  },
} = process;

export const APP_CONFIG = {
  environment: ENVIRONMENT,
  loginGuardEnable: LOGIN_GUARD_ENABLE,
  port: PORT,
  roleGuardEnable: ROLE_GUARD_ENABLE,
  webHost: WEB_HOST,
  appHost: APP_HOST,

  databaseHost: _.toString(DATABASE_HOST),
  databaseName: _.toString(DATABASE_NAME),
  databasePassword: _.toString(DATABASE_PASSWORD),
  databasePort: _.toNumber(DATABASE_PORT),
  databaseUsername: _.toString(DATABASE_USERNAME),

  cookieSecret: COOKIE_SECRET,
  sessionSecret: SESSION_SECRET,

  localPasswordField: LOCAL_PASSWORD_FIELD,
  localUsernameField: LOCAL_USERNAME_FIELD,

  uploadImagePath: UPLOAD_PATH_IMAGE,
};
