const {
  env: {
    ENVIRONMENT,
    LOGIN_GUARD_ENABLE,
    PORT,
    ROLE_GUARD_ENABLE,
    WEB_HOST,

    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,

    COOKIE_SECRET,
    SESSION_SECRET,

    LOCAL_PASSWORD_FIELD,
    LOCAL_USERNAME_FIELD,
  },
} = process;

export const APP_CONFIG = {
  environment: ENVIRONMENT,
  loginGuardEnable: LOGIN_GUARD_ENABLE,
  port: PORT,
  roleGuardEnable: ROLE_GUARD_ENABLE,
  webHost: WEB_HOST,

  cookieSecret: COOKIE_SECRET,
  sessionSecret: SESSION_SECRET,

  localPasswordField: LOCAL_PASSWORD_FIELD,
  localUsernameField: LOCAL_USERNAME_FIELD,
};
