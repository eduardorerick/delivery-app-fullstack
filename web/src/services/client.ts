import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { Delivery } from "../entities/Delivery";
import { api } from "../utils/api";

export function useClientLogin() {
  const { enqueueSnackbar } = useSnackbar();
  return async (username: string, password: string) => {
    try {
      const user = await api.post("/client/authenticate", {
        username,
        password,
      });
      localStorage.setItem("access_token", user.data);
      return user;
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message, {
        variant: "error",
      });
      throw new Error();
    }
  };
}

export function useClientRegistration() {
  const { enqueueSnackbar } = useSnackbar();
  return async (username: string, password: string) => {
    try {
      const newUser = await api.post("/client", { username, password });
      enqueueSnackbar("Usuário criado com sucesso!", {
        variant: "success",
      });
      return newUser;
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message, {
        variant: "error",
      });
      throw new Error();
    }
  };
}
export function useClientDeliveries() {
  const { enqueueSnackbar } = useSnackbar();
  return async (): Promise<Delivery[]> => {
    try {
      const { data } = await api.get<{
        id: string;
        username: string;
        deliveries: Delivery[];
      }>("/client/deliveries");
      return data.deliveries;
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message, {
        variant: "error",
      });
      throw new Error();
    }
  };
}
