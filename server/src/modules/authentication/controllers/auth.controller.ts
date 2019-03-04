import { Controller, Get, Post, Request, Response } from '@nestjs/common';
import * as passport from "passport";
import { AuthService } from '../services/auth.service';
import { createResult } from 'src/utils';
import { HTTP_CODE_ENUM } from 'src/enums/http-code.enum';

@Controller('auth')
export class AuthController {
  constructor() { }

  @Post("login")
  public login(@Request() request: any, @Response() response: any) {
    passport.authenticate("local")(request, response, () => {
      response.send(createResult(request.user, HTTP_CODE_ENUM.OK));
    });
  }

  @Post("logout")
  public logout(@Request() request: any, @Response() response: any) {
    request.logout();
    response.send(createResult({}, HTTP_CODE_ENUM.OK));
  }

  // @Get('token')
  // async createToken(): Promise<any> {
  //   return await this.authService.createToken();
  // }
}
