import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Drawer anchor="top" open={isOpen} onClose={handleCloseDrawer}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/");
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/footprint");
                  }}
                >
                  <ListItemText primary="Footprint" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/journey");
                  }}
                >
                  <ListItemText primary="Journey" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton size="large" onClick={handleOpenDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  navigate("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  navigate("/footprint");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Footprint
              </Button>
              <Button
                onClick={() => {
                  navigate("/journey");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Journey
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
