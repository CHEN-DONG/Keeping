import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class LocalGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return request.user;
  }
}
