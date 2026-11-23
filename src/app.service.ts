import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { conf } from './core';

export class App {
  static readonly logger = new Logger(App.name);
  static readonly isProd = conf.NODE_ENV === 'production';
  static readonly HOST = this.isProd ? '0.0.0.0' : 'localhost';
  static readonly api = 'api/v1';

  static async main() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(this.api);
    app.enableCors();

    await app.listen(conf.PORT, this.HOST);

    this.logger.log(`\n Server is running: http://${this.HOST}:${conf.PORT}/${this.api}`);
  }
}
