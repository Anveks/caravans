// import { Controller, Get, Req } from "@nestjs/common";
// import { RouteNotFoundError } from "./shared/models/error.models";

// @Controller()
// export class AppController {
//   @Get("*")
//   notFound(
//     @Req() request: Request
//   ) {
//     const route = request.url;
//     console.log(route);
//     console.log('ROUTE NOT FOUND REACHED 🔥🔥🔥');
//     throw new RouteNotFoundError(route);
//   };

// }