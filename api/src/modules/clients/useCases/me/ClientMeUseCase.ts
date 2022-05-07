import { prisma } from "../../../../database/prismaClient";

export class ClientMeUseCase {
  async execute(id_client: string) {
    const userMe = await prisma.client.findUnique({
      where: {
        id: id_client,
      },
      select: {
        username: true,
      },
    });
    return userMe;
  }
}
