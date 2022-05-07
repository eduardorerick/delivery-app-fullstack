import { Request, Response } from "express";
import { DeliverymanUseCase } from "./DeliverymanMeUseCase";

export class DeliverymanMeController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const deliverymanMe = new DeliverymanUseCase();
    const userMe = await deliverymanMe.execute(id_deliveryman);

    return response.json(userMe);
  }
}
