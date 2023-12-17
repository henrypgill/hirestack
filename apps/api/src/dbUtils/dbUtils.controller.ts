import { Controller, Get } from '@nestjs/common';
import { DbUtilsService } from './dbUtils.service';

@Controller()
export class DbUtilsController {
  constructor(private readonly DbUtilsService: DbUtilsService) {}

  @Get("/populateDatabase")
  populateUsers(): string {
    return this.DbUtilsService.populateDatabase();
  }
} 