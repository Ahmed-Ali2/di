import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  calculta(a: number, b: number) {
    console.log(`this is in side cpu service => calculate function`);
    this.powerService.supplyPower(10);

    return a + b;
  }
}
