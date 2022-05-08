import { string } from "yup";

export interface Delivery {
  id: string;
  id_client: string;
  id_deliveryman: null | string;
  item_name: string;
  created_at: string;
  end_at: null | string;
}
