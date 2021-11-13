import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './gateways/controllers/app.controller';
import { ItemsController } from './gateways/controllers/items.controller';
import { HelloWorldService } from './usecases/HelloWorld.service';

@Module({
  imports: [ConfigModule.forRoot()],

  controllers: [AppController, ItemsController],
  providers: [HelloWorldService],
})
export class AppModule {}
