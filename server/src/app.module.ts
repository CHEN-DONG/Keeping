import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE_CONFIG } from './configs/database.config'
import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/authentication/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FileModule } from './modules/file/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    BlogModule,
    AuthModule,
    DashboardModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
