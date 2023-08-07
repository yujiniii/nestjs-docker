import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Access-Control-Allow-Headers',
        'Authorization',
        'X-Requested-With',
        'Token',
      ],
      credentials: true, // Allow credentials (cookies)
    },
  });
  setupSwagger(app);
  await app.listen(3000);
}

bootstrap().then(() => console.log('running on port 3000..'));
