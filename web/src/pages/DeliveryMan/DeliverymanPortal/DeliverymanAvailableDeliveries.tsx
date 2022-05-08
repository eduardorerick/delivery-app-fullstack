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
import { DeliveryProgress } from "../../../components/DeliveryProgress";
import { Delivery } from "../../../types/Delivery";
import { useClientDeliveries } from "../../../services";
import {
  useAvailableDeliveries,
  useUpdateDeliveryman,
} from "../../../services/delivery";
import { RouterPath } from "../../../constants";
import { useNavigate } from "react-router-dom";

export function DeliverymanAvailableDeliveries() {
  const navigate = useNavigate()
  const getAvailableDeliveries = useAvailableDeliveries();
  const updateDelivery = useUpdateDeliveryman();
  const [deliveries, setDeliveries] = useState([] as Delivery[]);

  useEffect(() => {
    async function getData() {
      const response = await getAvailableDeliveries();
      setDeliveries(response);
    }
    getData();
  }, []);

  async function pickDelivery(id: string) {
    await updateDelivery(id);
    navigate(RouterPath.DELIVERY_MAN_PORTAL_DELIVERIES);
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
                Ainda não tem pedidos! Aguarde para mais pedidos.
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
                <Button
                  onClick={() => pickDelivery(delivery.id)}
                  variant="contained"
                >
                  <Typography>aceitar entrega</Typography>
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
