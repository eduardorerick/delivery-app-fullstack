import { api } from "../utils/api";

export async function getAuthLogin(username: string, password: string) {
  const user = await api.post("/client/authenticate", { username, password });
  console.log(user);
}
