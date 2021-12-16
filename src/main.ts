import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootsrap');
  const app = await NestFactory.create(AppModule);

  const PORT: number =
    parseInt(process.env.PORT) || parseInt(serverConfig.port);
  await app.listen(PORT);
  logger.log('Application listening on Port::' + PORT);
}
bootstrap();
