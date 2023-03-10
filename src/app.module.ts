import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputsDataController } from './inputs-data/inputs-data.controller';
import { InputsDataService } from './inputs-data/inputs-data.service';
import { CalcController } from './calc/calc.controller';
import { CalcService } from './calc/calc.service';

@Module({
  imports: [],
  controllers: [AppController, InputsDataController, CalcController],
  providers: [AppService, InputsDataService, CalcService],
})
export class AppModule {}
