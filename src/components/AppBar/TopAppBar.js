import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Switch,
  Menu
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, styled, alpha } from "@mui/material/styles";
import myTheme from "../../theme.json"
const pages = [
  { content: "Objective", id: "objective" },
  { content: "Journey", id: "journey" },
  { content: "Extra", id: "extra" },
  { content: "Contact", id: "contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: myTheme.LightColors.AppBar,
    "&:hover": {
      backgroundColor: alpha(myTheme.LightColors.AppBar, theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: myTheme.LightColors.AppBar,
  },
}));
const themeLight = createTheme({
  palette: {
    primary: {
      main: myTheme.LightColors.AppBar,
    },
  },
});
const themeDark = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});
const TopBar = (props) => {
  const [dark, setDark] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    props.setOpen(true);
  };
  const handleOpenUserMenu = (event) => {
    props.setOpen(true);
  };

  const handleCloseNavMenu = () => {
    props.setOpen(false);
  };

  const handleCloseUserMenu = () => {
    props.setOpen(false);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <AppBar position="fixed" theme={dark ? themeDark : themeLight}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src={require("./kitty.png").default}
              alt="Jahid"
              height={"50px"}
              width={"50px"}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jahid Hasan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} href={`/#${page.id}`}>
                  <Typography textAlign="center">{page.content}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={require("./kitty.png").default}
              alt="Jahid"
              height={"50px"}
              width={"50px"}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jahid Hasan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                href={`/#${page.id}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.content}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            <GreenSwitch
              {...label}
              onClick={() => {
                setDark(!dark);
              }}
              checked={dark}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
                  src={require("./laughing.png").default}
                  alt="Jahid"
                  height={"50px"}
                  width={"50px"}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
