import {
  Box,
  Button,
  Container,
  Grow,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

export function Login() {
  const {} = useForm();
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
            <Typography variant="h4">Seja bem-vindo!</Typography>
            <Box
              sx={{
                borderRadius: "5px",
                padding: "16px 32px",
                border: "1px solid white",
              }}
            >
              <Stack direction={"column"} spacing={4}>
                <TextField
                  fullWidth
                  focused
                  variant="standard"
                  label={"Username"}
                  color={"secondary"}
                />
                <TextField
                  focused
                  variant="standard"
                  fullWidth
                  inputProps={{ type: "password" }}
                  label={"Senha"}
                  color={"secondary"}
                />
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
                <Button variant={"contained"}>
                  <Typography>Cadastrar</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grow>
    </Container>
  );
}
