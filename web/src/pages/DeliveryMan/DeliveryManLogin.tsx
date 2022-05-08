import {
  Box,
  Button,
  Container,
  Grow,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../constants/routes";
import { useDeliveryManLogin } from "../../services";
import { Login } from "../../types/Login";
import { clientLoginYupResolver } from "../../validations";

export function DeliveryManLogin() {
  const navigate = useNavigate();
  const deliverymanLogin = useDeliveryManLogin();

  const { control, register, handleSubmit } = useForm<Login>({
    mode: "onChange",
    resolver: clientLoginYupResolver,
  });

  async function handleClick({ password, username }: Login) {
    console.log("clicou");
    await deliverymanLogin(username, password);
    navigate(RouterPath.DELIVERY_MAN_PORTAL);
  }
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
              userSelect: "none",
              color: "primary.contrastText",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Seja bem-vindo!</Typography>
              <Typography variant="body1">
                Faça login como <strong>Motorista do app</strong>
              </Typography>
            </Box>
            <Paper
              sx={{
                borderRadius: "5px",
                padding: "16px 32px",
              }}
            >
              <Stack direction={"column"} spacing={4}>
                <TextField
                  {...register("username")}
                  fullWidth
                  label={"Nome de usuário"}
                />
                <TextField
                  {...register("password")}
                  fullWidth
                  inputProps={{ type: "password" }}
                  label={"Senha"}
                />
                <Button
                  onClick={handleSubmit(handleClick)}
                  variant={"contained"}
                >
                  <Typography>Login</Typography>
                </Button>
              </Stack>
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <Typography>
                  Ainda não tem acesso? Faça o seu cadastro!
                </Typography>
                <Button
                  onClick={() => navigate(RouterPath.DELIVERY_MAN_REGISTRATION)}
                  variant={"contained"}
                >
                  <Typography>Cadastrar</Typography>
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Grow>
    </Container>
  );
}
