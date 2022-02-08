// 95% imports you'd use would come from this common library
import { Controller, Get, Module } from "@nestjs/common";

// Only some would come from this core library
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "hi there";
  }
}

@Module({
  /**
   * Nest will create the instance of these app controllers for us
   * and setup route handlers for each of the listed routes in controller
   */
  controllers: [AppController], // We have to list all the controllers in the application here
})
class AppModule {}

// bootstrap is common convention for startup point
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// here is where it all starts
bootstrap();

// Just because we have made eveything from scratch we are using the following command to start the application
// >npx ts-node-dev src/main.ts
