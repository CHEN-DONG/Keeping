import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE_CONFIG } from './configs/database.config'

console.log(DATABASE_CONFIG);
@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
