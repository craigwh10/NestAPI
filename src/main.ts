import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NOTE: 
  // Prefixes as /v1/{Endpoints}
  app.setGlobalPrefix('v1');

  // NOTE: 
  // Referenced https://docs.nestjs.com/pipes#global-scoped-pipes
  // Applied to every route.
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  // NOTE: Swagger setup:
  // https://docs.nestjs.com/openapi/introduction
  const options = new DocumentBuilder()
    .setTitle('Example nestJS API')
    .setDescription('Example endpoints that will improve over time')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
