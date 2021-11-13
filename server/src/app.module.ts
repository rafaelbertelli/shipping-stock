import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './gateways/controllers/items/items.controller';

@Module({
  imports: [ConfigModule.forRoot()],

  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule { }
