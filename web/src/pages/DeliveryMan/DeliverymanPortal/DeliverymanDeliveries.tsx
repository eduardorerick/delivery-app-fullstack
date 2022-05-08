import {
  Container,
  Grow,
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DeliveryProgress } from "../../../components/DeliveryProgress";
import { RouterPath } from "../../../constants";
import { useDeliverymanDeliveries } from "../../../services";
import { useCreateDelivery } from "../../../services/delivery";
import { Delivery } from "../../../types/Delivery";
import { clientNewDeliveryResolver } from "../../../validations";

type NewDeliveryForm = {
  item_name: string;
};

export function DeliverymanDeliveries() {
  const createDelivery = useCreateDelivery();
  const deliverymanDeliveries = useDeliverymanDeliveries();
  const [deliveries, setDeliveries] = useState([] as Delivery[]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewDeliveryForm>({
    mode: "onChange",
    resolver: clientNewDeliveryResolver,
  });

  useEffect(() => {
    async function getData() {
      const response = await deliverymanDeliveries();
      setDeliveries(response);
    }
    getData();
  }, []);

  async function handleClick(data: NewDeliveryForm) {
    try {
      const response = await createDelivery(data.item_name);
      navigate(RouterPath.CLIENT_PORTAL_DELIVERIES);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Paper sx={{ marginTop: 10, padding: 2 }}>
        <Grid container spacing={2}>
          {!deliveries.length && (
            <Grid item md={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ainda não tem pedidos! Faça seu primeiro pedido
              </Box>
            </Grid>
          )}
          {deliveries.map((delivery) => (
            <Grid item md={4} sm={6} key={delivery.id}>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  padding: 1.5,
                  gap: 2,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "300px",
                }}
              >
                <Typography>{delivery.item_name}</Typography>
                <Typography>22-10-2022</Typography>
                <Button variant="contained">Encerrar pedido</Button>
                <DeliveryProgress delivery={delivery}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
