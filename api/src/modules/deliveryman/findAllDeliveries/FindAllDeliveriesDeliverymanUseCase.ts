import { prisma } from "../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });
    return deliveryman;
  }
}
