import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log(`this is inside Deis Service => get data method`);

    this.powerService.supplyPower(15);
    return 'data!';
  }
}
