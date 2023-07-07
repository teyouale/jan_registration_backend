import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRoleType } from "src/users/enums/user-role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchRoles(roles: string[], userRole: string) {
    return roles.some((role) => role === userRole);
  }

  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<UserRoleType[]>(
      "roles",
      [context.getHandler(), context.getClass()]
    );

    if (!requireRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    return requireRoles.some((role) => user.role === role);
  }
}
