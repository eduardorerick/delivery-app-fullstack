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

export function ClientDeliveries() {
  const getDeliveries = useClientDeliveries();
  const [deliveries, setDeliveries] = useState([] as Delivery[]);

  useEffect(() => {
    async function getData() {
      const response = await getDeliveries();
      setDeliveries(response);
    }
    getData();
  }, []);

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
                <DeliveryProgress delivery={delivery}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
