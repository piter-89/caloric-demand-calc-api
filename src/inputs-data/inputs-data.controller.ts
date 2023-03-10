import { Controller, Get } from '@nestjs/common';
import { InputsDataService } from './inputs-data.service';

@Controller('inputs-data')
export class InputsDataController {
  constructor(private readonly inputsDataService: InputsDataService) {}

  @Get()
  inputsData(): string {
    return this.inputsDataService.getInputsData();
  }
}
