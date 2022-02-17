import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

const bootstrap = async () => {
  const PORT = process.env.PORT || 5000;
  const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';

  const app = await NestFactory.create(AppModule);

  app.use(morgan('tiny'));
  app.enableCors({
    credentials: true,
    origin: clientUrl,
  });

  await app.listen(PORT);
  console.log(`Server running on listening on port ${PORT}`);
};

bootstrap();
