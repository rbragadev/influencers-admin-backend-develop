import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //Swagger Docs
  const config = new DocumentBuilder()
    .setTitle('B4A - Influencer Connect - Backend - Documentação Swagger')
    .setDescription('Documentação Automatizada OpenApi.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('users')
    .addTag('partners')
    .addTag('auth')
    .addTag('main')
    .addTag('administrative')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
