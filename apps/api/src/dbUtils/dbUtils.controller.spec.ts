import { Test, TestingModule } from '@nestjs/testing';
import { DbUtilsController } from './dbUtils.controller';
import { DbUtilsService } from './dbUtils.service';

describe('AppController', () => {
  let dbUtilsController: DbUtilsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DbUtilsController],
      providers: [DbUtilsService],
    }).compile();

    dbUtilsController = app.get<DbUtilsController>(DbUtilsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(DbUtilsController.getHello()).toBe('Hello World!');
    });
  });
});
