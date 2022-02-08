// Only some would come from this core library
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

// bootstrap is common convention for startup point
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// here is where it all starts
bootstrap();

// Just because we have made eveything from scratch we are using the following command to start the application
// >npx ts-node-dev src/main.ts
