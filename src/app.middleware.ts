import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<any> {
    const { method, originalUrl, ip } = request;
    response.on('finish', () => {
      const { statusCode } = response;
      this.logger.log(`${method} ${statusCode} ${originalUrl} ${ip}`);
    });

    next();
  }
}
