import { Box, Container, Typography, Button, Slide } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { AssetPath, RouterPath } from "../../../constants";

export function ClientPortal() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "64vh",
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
                  onClick={() =>
                    navigate(RouterPath.CLIENT_PORTAL_NEW_DELIVERY)
                  }
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Novo pedido</Typography>
                </Button>
                <Button
                  variant="text"
                  onClick={() => navigate(RouterPath.DELIVERY_MAN_LOGIN)}
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Acompanhar pedidos</Typography>
                </Button>
                {/* <Button
                    variant="text"
                    onClick={() => navigate("/login")}
                    sx={{ color: "primary.contrastText", textTransform: "none" }}
                  >
                    <Typography>Login como restaurante</Typography>
                  </Button> */}
              </Box>
            </Box>
          </Box>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
