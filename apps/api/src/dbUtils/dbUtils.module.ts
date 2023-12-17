import { Module } from '@nestjs/common';
import { DbUtilsController } from './dbUtils.controller';
import { DbUtilsService } from './dbUtils.service';

@Module({
  imports: [],
  controllers: [DbUtilsController],
  providers: [DbUtilsService],
})
export class DbUtilsModule {}
