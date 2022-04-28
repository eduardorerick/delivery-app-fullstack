import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../constants/routes";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box component="nav" sx={{ height: "100vh", marginTop: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ userSelect: 'none', color: "primary.main" }}>
            Delivery App
          </Typography>
          <Box>
            <Button
              variant="text"
              onClick={() => navigate(RouterPath.CLIENT_LOGIN)}
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              <Typography>Login como cliente</Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => navigate("/login")}
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              <Typography>Login como motorista</Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => navigate("/login")}
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              <Typography>Login como restaurante</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
