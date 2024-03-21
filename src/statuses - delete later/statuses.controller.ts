import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { Status } from "./statuses.model";
import { StatusesService } from "./statuses.service";

@Controller('/statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Get()
  async getAllStatuses(): Promise<Status[]> {
    try {
      const result = await this.statusesService.getAllStatuses();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message); // rethrow error if occurs
    }
  }
}