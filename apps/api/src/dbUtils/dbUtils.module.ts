import { Module } from '@nestjs/common';
import { DbUtilsController } from './dbUtils.controller.js';
import { DbUtilsService } from './dbUtils.service.js';

@Module({
  imports: [],
  controllers: [DbUtilsController],
  providers: [DbUtilsService],
})
export class DbUtilsModule {}
