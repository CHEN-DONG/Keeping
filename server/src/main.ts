import * as dotenv from "dotenv";
dotenv.config();
import { APP_CONFIG } from "./configs/app.config";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const { port, cookieSecret, sessionSecret } = APP_CONFIG;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
