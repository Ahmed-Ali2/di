import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

@Module({
  exports: [CpuService],
  providers: [CpuService],
  imports: [PowerModule],
})
export class CpuModule {}
