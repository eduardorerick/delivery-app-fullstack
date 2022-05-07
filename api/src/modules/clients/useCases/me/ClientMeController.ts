import { Request, Response } from "express";
import { ClientMeUseCase } from "./ClientMeUseCase";

export class ClientMeController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const clientMe = new ClientMeUseCase();
    const userMe = await clientMe.execute(id_client);

    return response.json(userMe);
  }
}
