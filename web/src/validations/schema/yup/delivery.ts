import * as yup from "yup";

export const newDeliverySchema = yup.object({
  item_name: yup.string().required("Esse campo é obrigatório"),
});
