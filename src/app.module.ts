// 95% imports you'd use would come from this common library
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  /**
   * Nest will create the instance of these app controllers for us
   * and setup route handlers for each of the listed routes in controller
   */
  controllers: [AppController], // We have to list all the controllers in the application here
})
export class AppModule {}
