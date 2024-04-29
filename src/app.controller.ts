import { Controller, Get, Req } from "@nestjs/common";
import { RouteNotFoundError } from "./shared/models/error.models";

@Controller()
export class AppController {
  @Get("*")
  notFound(
    @Req() request: Request
  ) {
    const route = request.url;
    throw new RouteNotFoundError(route);
  };

}