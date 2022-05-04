import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ password, username }: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Nome de usuário ou senha inválidos!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Nome de usuário ou senha inválidos!");
    }

    const token = sign({ username }, process.env.HASH_CLIENT!, {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
