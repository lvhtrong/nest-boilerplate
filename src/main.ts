import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as compression from 'compression';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { setupSwagger } from './viveo-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());

  app.use(compression());
  app.use(morgan('combined'));

  const configService = app.select(SharedModule).get(ConfigService);

  if (['development', 'staging'].includes(configService.nodeEnv)) {
    setupSwagger(app);
  }

  const port = configService.getNumber('PORT');
  await app.listen(port);

  console.info(`server running on port ${port}`);
}
bootstrap();
