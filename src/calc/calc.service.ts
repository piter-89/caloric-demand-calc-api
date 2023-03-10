import { Injectable } from '@nestjs/common';
import { UserInput } from './calc';

@Injectable()
export class CalcService {
  calcUserData(data: UserInput): any {
    let caloriesDailyDemand = 1800;
    let trainingCaloriesConsumpionPerHour = 500;

    if (data.age < 30) caloriesDailyDemand += 200;
    if (data.age > 60) caloriesDailyDemand -= 200;
    if (data.gender === 'male') caloriesDailyDemand += 200;
    if (data.workType === 'white-collar work') caloriesDailyDemand -= 200;
    if (data.workType === 'blue-collar work - light') caloriesDailyDemand += 100;
    if (data.workType === 'blue-collar work - hard') caloriesDailyDemand += 400;

    if (data.trainingsIntensity === 'low')
      trainingCaloriesConsumpionPerHour -= 200;
    if (data.trainingsIntensity === 'hard')
      trainingCaloriesConsumpionPerHour += 200;

    caloriesDailyDemand +=
      (data.trainingsWeekly *
        data.avTrainingDuration *
        trainingCaloriesConsumpionPerHour) /
      7;

    return Math.floor(caloriesDailyDemand);
  }
}
