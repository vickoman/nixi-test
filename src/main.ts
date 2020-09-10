import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { warn } from 'console';
import 'dotenv/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();

  // Swagger
  const options = new DocumentBuilder()
    .setTitle("API NIXI")
    .setDescription("API To demostrate knowledge about nodejs by Victor Diaz")
    .setVersion("1.0")
    .addTag("API")
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [
      UserModule,
      TaskModule,
    ],
  });

  SwaggerModule.setup('api', app, document);
  // Listen port
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  warn(`APP IS LISTENING TO PORT ${PORT}`);
}
bootstrap();
