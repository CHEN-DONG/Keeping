import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE_CONFIG } from './configs/database.config'
import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/authentication/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    BlogModule,
    AuthModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
