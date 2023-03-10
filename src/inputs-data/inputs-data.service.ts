import { Injectable } from '@nestjs/common';

@Injectable()
export class InputsDataService {
  getInputsData(): any {
    return {
      gender: ['male', 'female'],
      workType: [
        'white-collar work',
        'blue-collar work - light',
        'blue-collar work - hard',
      ],
      trainingsIntensity: ['low', 'medium', 'hard'],
    };
  }
}
