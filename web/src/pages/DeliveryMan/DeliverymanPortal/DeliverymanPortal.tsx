import { Box, Container, Typography, Button, Slide } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { AssetPath, RouterPath } from "../../../constants";

export function DeliverymanPortal() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate(RouterPath.LANDING_PAGE);
  }
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
                    navigate(
                      RouterPath.DELIVERY_MAN_PORTAL_AVAILABLE_DELIVERIES
                    )
                  }
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Pedidos disponíveis</Typography>
                </Button>
                <Button
                  variant="text"
                  onClick={() =>
                    navigate(RouterPath.DELIVERY_MAN_PORTAL_DELIVERIES)
                  }
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Pedidos em andamento</Typography>
                </Button>
                <Button
                  variant="text"
                  onClick={handleLogout}
                  sx={{ color: "primary.contrastText", textTransform: "none" }}
                >
                  <Typography>Logout</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
