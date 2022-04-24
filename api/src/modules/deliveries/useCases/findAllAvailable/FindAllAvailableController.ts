import { Request, Response } from "express";
import { FindAllAvailableDateUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailable = new FindAllAvailableDateUseCase();

    const deliveries = await findAllAvailable.execute();

    return response.json(deliveries);
  }
}
