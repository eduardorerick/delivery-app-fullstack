import { Box, Button, Container, Slide, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AssetPath, RouterPath } from "../constants";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundSize: "cover",
        height: "64vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${AssetPath.LANDING_PAGE_WAVE})`,
      }}
    >
      <Container>
        <Box sx={{ height: "100vh", paddingTop: 1 }}>
          <Box component="nav">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{ userSelect: "none", color: "primary.contrastText" }}
              >
                Delivery App
              </Typography>
              <Box>
                <Button
                  variant="text"
                  onClick={() => navigate(RouterPath.CLIENT_LOGIN)}
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Login como cliente</Typography>
                </Button>
                <Button
                  variant="text"
                  onClick={() => navigate(RouterPath.DELIVERY_MAN_LOGIN)}
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Login como motorista</Typography>
                </Button>
                <Button
                  variant="text"
                  onClick={() => navigate("/login")}
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Login como restaurante</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              userSelect: "none",
              display: "flex",
              gap: "40px",
              height: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Slide direction="right" in={true} timeout={1000}>
              <Box
                sx={{
                  flex: 1,
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={AssetPath.LANDING_PAGE_BIKE_DELIVERY}
                  alt="Woman in bike making a delivery"
                />
              </Box>
            </Slide>
            <Box sx={{ flex: 1, color: "primary.contrastText" }}>
              <Typography variant="h3">Delivery App</Typography>
              <Typography variant="body1">
                Melhor app fullstack de entregas
              </Typography>
              <Typography variant="body2">
                Feito para estudar React, Docker, Express e Postgres!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
