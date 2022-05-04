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
import { RouterPath } from "../../constants";
import { useClientRegistration } from "../../services/client";
import { clientPasswordYupResolver } from "../../validations";

type ClientRegistrationForm = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

export function ClientRegistration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegistrationForm>({
    mode: "onChange",
    resolver: clientPasswordYupResolver,
  });
  const createClient = useClientRegistration();

  async function handleClick(data: ClientRegistrationForm) {
    await createClient(data.username, data.password);
    navigate(RouterPath.LANDING_PAGE);
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
                  {...register("username")}
                  fullWidth
                  {...(!!errors.username && {
                    helperText: errors.username.message,
                  })}
                  error={!!errors.username}
                  required
                  label={"Nome de usuário"}
                />
                <TextField
                  {...register("password")}
                  error={!!errors.password}
                  {...(!!errors.password && {
                    helperText: errors.password.message,
                  })}
                  required
                  fullWidth
                  inputProps={{ type: "password" }}
                  label={"Senha"}
                />
                <TextField
                  {...register("passwordConfirmation")}
                  error={!!errors.passwordConfirmation}
                  {...(!!errors.passwordConfirmation && {
                    helperText: errors.passwordConfirmation.message,
                  })}
                  required
                  fullWidth
                  inputProps={{ type: "password" }}
                  label={"Confirme sua senha"}
                />
                <Button
                  onClick={handleSubmit(handleClick)}
                  variant={"contained"}
                >
                  <Typography>Cadastrar</Typography>
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Grow>
    </Container>
  );
}
