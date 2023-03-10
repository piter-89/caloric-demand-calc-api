import { Controller, Post, Body } from '@nestjs/common';
import { UserInput } from './calc';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Post()
  calcDemand(@Body() userInput: UserInput): number {
    return this.calcService.calcUserData(userInput);
  }
}
