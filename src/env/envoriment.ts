export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number;
      DB_PORT: number;
      DB_HOST: string;
      DB_DATABASE: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      SUA_INSTANCIA: string;
      SEU_TOKEN: string;
      KEYCLOAK_URL: string;
      KEYCLOAK_REALM: string;
      KEYCLOAK_CLIENT_ID: string;
      KEYCLOAK_SECRET: string;
      MAIL_HOST: string;
      MAIL_PORT: number;
      MAIL_USER: string;
      MAIL_PASS: string;
      MAIL_DEFALUT: string;
      TWILIO_ACCOUNT_SID: string;
      TWILIO_AUTH_TOKEN: string;
    }
  }
}
