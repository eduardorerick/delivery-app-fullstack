import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableDateUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman: null,
        end_at: null,
      },
    });

    return deliveries;
  }
}
