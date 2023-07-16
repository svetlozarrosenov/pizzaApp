import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  public constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  public async login(user: any): Promise<any> {
    const payload = { email: user.email, sub: user._id };
    return {
      jwt: this.jwtService.sign(payload),
    };
  }

  private cookieExtractor(req) {
    let token = null;
    if (req && req.cookies) token = req.cookies.jwt;
    return token;
  }

  returnCookieExtractor() {
    return this.cookieExtractor;
  }
}
