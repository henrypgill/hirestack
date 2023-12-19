import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { DbUtilsModule } from './dbUtils/dbUtils.module';

@Module({
  imports: [UserModule, DbUtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
