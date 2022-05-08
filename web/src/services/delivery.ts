import { useSnackbar } from "notistack";
import { Delivery } from "../types/Delivery";
import { api } from "../utils/api";

export function useCreateDelivery() {
  const { enqueueSnackbar } = useSnackbar();
  return async (item_name: string): Promise<Delivery> => {
    try {
      const response = await api.post<Delivery>("/delivery", {
        item_name,
      });
      enqueueSnackbar("Item pedido com sucesso!", {
        variant: "success",
      });
      return response.data;
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message, {
        variant: "error",
      });
      throw new Error();
    }
  };
}
