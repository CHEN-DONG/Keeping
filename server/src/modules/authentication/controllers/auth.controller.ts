import { Controller, Get, Post, Request, Response } from '@nestjs/common';
import * as passport from "passport";
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor() { }

  @Post("login")
  public login(@Request() request: any, @Response() response: any) {
    passport.authenticate("local")(request, response, () => {
      response.send("login");
    });
  }

  @Post("logout")
  public logout(@Request() request: any, @Response() response: any) {
    request.logout();
    response.send("logout");
  }

  // @Get('token')
  // async createToken(): Promise<any> {
  //   return await this.authService.createToken();
  // }
}
