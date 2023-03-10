import { Test, TestingModule } from '@nestjs/testing';
import { InputsDataController } from './inputs-data.controller';

describe('InputsDataController', () => {
  let controller: InputsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InputsDataController],
    }).compile();

    controller = module.get<InputsDataController>(InputsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
