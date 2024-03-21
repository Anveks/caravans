import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Status } from "./statuses.model";

@Injectable()
export class StatusesService {
  constructor(
    @InjectModel('Status') private readonly statusModel: Model<Status>
  ){}

  // getting all statuses:
  async getAllStatuses(): Promise<Status[]>{
    let statuses = [];
    try {
      statuses = await this.statusModel.find();
      return statuses;
    } catch (err: any) {
      if (statuses.length === 0) throw new InternalServerErrorException('Error while fetching statuses.');
    };
  }

}