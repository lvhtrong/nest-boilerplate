import { Global, HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './services/config.service';
import { GeneratorService } from './services/generator.service';
import { ValidatorService } from './services/validator.service';

const providers = [ConfigService, ValidatorService, GeneratorService];

@Global()
@Module({
  providers,
  imports: [
    HttpModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get('DB_URI'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
