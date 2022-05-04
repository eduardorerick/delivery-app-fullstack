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
import { useClientLogin } from "../../services";
import { clientLoginYupResolver } from "../../validations";

type ClientLogin = {
  username: string;
  password: string;
};

export function ClientLogin() {
  const navigate = useNavigate();
  const clientLogin = useClientLogin();

  const { register, handleSubmit } = useForm<ClientLogin>({
    mode: "onChange",
    resolver: clientLoginYupResolver,
  });

  async function handleClick({ password, username }: ClientLogin) {
    await clientLogin(username, password);
    navigate(RouterPath.CLIENT_PORTAL);
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
                Faça login como <strong>Cliente</strong>
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
                  label={"Username"}
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
                  onClick={() => navigate(RouterPath.CLIENT_REGISTRATION)}
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
