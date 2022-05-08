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
import { useDeliveryManRegistration } from "../../services";
import { clientPasswordYupResolver } from "../../validations";

type DeliveryManRegistrationForm = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

export function DeliveryManRegistration() {
  const navigate = useNavigate();
  const createDeliveryman = useDeliveryManRegistration();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryManRegistrationForm>({
    mode: "onChange",
    resolver: clientPasswordYupResolver,
  });

  async function handleClick(data: DeliveryManRegistrationForm) {
    try {
      await createDeliveryman(data.username, data.password);
      navigate(RouterPath.LANDING_PAGE);
    } catch (err) {
      console.log(err);
    }
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
