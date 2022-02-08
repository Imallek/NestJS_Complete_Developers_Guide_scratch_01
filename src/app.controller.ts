// 95% imports you'd use would come from this common library
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "hi there";
  }
}
