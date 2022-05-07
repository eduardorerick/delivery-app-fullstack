import { prisma } from "../../../database/prismaClient";

export class DeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const userMe = await prisma.deliveryman.findUnique({
      where: {
        id: id_deliveryman,
      },
      select: {
        username: true,
      },
    });
    return userMe;
  }
}
