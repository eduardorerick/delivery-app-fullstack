import {
  Container,
  Grow,
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { clientNewDeliveryResolver } from "../../../validations";

type NewDeliveryForm = {
  item_name: string;
};

export function NewDelivery() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewDeliveryForm>({
    mode: "onChange",
    resolver: clientNewDeliveryResolver,
  });

  async function handleClick(data: NewDeliveryForm) {}
  return (
    <Container>
      <Grow in={true} timeout={1000}>
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Paper
              sx={{
                borderRadius: "5px",
                padding: "16px 32px",
              }}
            >
              <Stack direction={"column"} spacing={4}>
                <TextField
                  {...register("item_name")}
                  fullWidth
                  {...(!!errors.item_name && {
                    helperText: errors.item_name.message,
                  })}
                  error={!!errors.item_name}
                  required
                  label={"Nome do produto"}
                />
                <Button
                  onClick={handleSubmit(handleClick)}
                  variant={"contained"}
                >
                  <Typography>Encomendar</Typography>
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Grow>
    </Container>
  );
}
