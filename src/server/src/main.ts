/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvCollection } from './shared/@constants/env.collection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const serverPort = Number(configService.get(EnvCollection.SERVER_PORT));

  console.log(serverPort)

  await app.listen(serverPort);
}
bootstrap();
