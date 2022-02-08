// 95% imports you'd use would come from this common library
import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hi")
  getRootRoute() {
    return "hi there";
  }

  @Get("/bye")
  getByeRoute() {
    return "bye there";
  }
}
