import { useSnackbar } from "notistack";
import { Delivery } from "../types/Delivery";
import { api } from "../utils/api";

export function useDeliveryManLogin() {
  const { enqueueSnackbar } = useSnackbar();
  return async (username: string, password: string) => {
    try {
      const user = await api.post("/deliveryman/authenticate", {
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

export function useDeliveryManRegistration() {
  const { enqueueSnackbar } = useSnackbar();
  return async (username: string, password: string) => {
    try {
      const newUser = await api.post("/deliveryman", { username, password });
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

export function useDeliverymanDeliveries() {
  const { enqueueSnackbar } = useSnackbar();
  return async (): Promise<Delivery[]> => {
    try {
      const { data } = await api.get<{
        id: string;
        username: string;
        deliveries: Delivery[];
      }>("/deliveryman/deliveries");
      console.log(data);
      return data.deliveries;
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message, {
        variant: "error",
      });
      throw new Error();
    }
  };
}
