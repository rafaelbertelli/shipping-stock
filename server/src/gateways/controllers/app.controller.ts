import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from 'src/usecases/HelloWorld.service';

@Controller()
export class AppController {
  constructor(private readonly _helloWorld: HelloWorldService) {}

  @Get()
  getHello(): string {
    return this._helloWorld.getHello();
  }
}
