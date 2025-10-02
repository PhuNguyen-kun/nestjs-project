import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PetModule } from './pet/pet.module';
import { SequelizeModule } from '@nestjs/sequelize';
import models from './pet/models';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public',
    }),
    PetModule,
    SequelizeModule.forRoot({
      uri: 'mysql://root:123456@localhost/nestjs_project_2025',
      dialect: 'mysql',
      models: models,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
