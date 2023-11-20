import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Flex, Image, useTheme } from "@aws-amplify/ui-react";
import { Box, ListItemButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SnackbarContext } from "../../context/snackBar.context";
import { UserContext } from "../../context/user.context";

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { tokens } = useTheme();

  const { showAlert } = useContext(SnackbarContext);
  const { mobile } = useContext(UserContext);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <Flex
          justifyContent="center"
          alignItems="center"
          marginBottom="20px"
          display="flex"
          direction="row"
          gap="10px"
        >
          <Image
            width="38px"
            height="38px"
            src="https://spartan-systems-marketplace-storage25017-staging.s3.us-west-2.amazonaws.com/public/email/SpartanLogo.jpeg"
            borderRadius="5px"
          />

          <Typography variant="h4" style={{ padding: "0px" }}>
            Spartan
          </Typography>
        </Flex>
        <List style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              border: `1px solid ${tokens.colors.border.primary}`,
              borderRadius: "8px",
            }}
          >
            <ListItemButton component={RouterLink} to="/">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: `1px solid ${tokens.colors.border.primary}`,
              borderRadius: "8px",
            }}
          >
            <ListItemButton component={RouterLink} to="/parts">
              <ListItemText primary="Search Parts" />
            </ListItemButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: `1px solid ${tokens.colors.border.primary}`,
              borderRadius: "8px",
            }}
          >
            <ListItemButton component={RouterLink} to="/inventory">
              <ListItemText primary="Inventory Management" />
            </ListItemButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: `1px solid ${tokens.colors.border.primary}`,
              borderRadius: "8px",
            }}
          >
            <ListItemButton component={RouterLink} to="/rfq">
              <ListItemText primary="Request for Quotations" />
            </ListItemButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: `1px solid ${tokens.colors.border.primary}`,
              borderRadius: "8px",
            }}
          >
            <ListItemButton
              component={RouterLink}
              to="/settings/company-details"
            >
              <ListItemText primary="Settings" />
            </ListItemButton>
          </Box>
        </List>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar
            style={{
              backgroundColor: tokens.colors.brand.primary[100],
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              fontWeight={600}
              color={tokens.colors.font.inverse}
            >
              Spartan
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNav;
