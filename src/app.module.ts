import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // express의 router, url을 가져오고 함수를 실행
  providers: [AppService],
})
export class AppModule {}
