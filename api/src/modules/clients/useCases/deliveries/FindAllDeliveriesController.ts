import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const findAllDeliveries = new FindAllDeliveriesUseCase();
    const deliveries = await findAllDeliveries.execute(id_client);

    return response.json(deliveries);
  }
}
