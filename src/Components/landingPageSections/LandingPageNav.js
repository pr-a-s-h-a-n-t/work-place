import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logo from "../../assets/workPlaceLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { DarkmodeContext } from "../../contex/darkmode/index";
import ModeToggle from "../../Components/common/ModeToggle";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "find Jobs",
    path: "candidate/auth",
  },
  {
    name: "find Candidates",
    path: "employer/auth",
  },
  {
    name: "articles",
    path: "/",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LandingPageNav() {
  const [state, dispatch] = React.useContext(DarkmodeContext);

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{
        color: state.shades.secondary,
        backgroundColor: state.shades.solutionCardBackground,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters

          // sx={{
          //   color: state.shades.secondary,
          //   backgroundColor: state.shades.LandingPageNavbackground,
          // }}
        >
          <Box
            sx={{
              width: "auto",
              display: { xs: "none", md: "flex" },
              //  border: "10px solid red",
              paddingTop: "20px",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{ maxWidth: "100px", width: "100%" }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#ffff",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                padding: 0,
              }}
              PaperProps={{
                style: {
                  backgroundColor: state.shades.solutionCardBackground,
                  color: state.shades.secondary,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Box
              sx={{
                width: "auto",
                color: state.shades.secondary,
                //  border: "1px solid red",
                paddingTop: "20px",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{ maxWidth: "100px", width: "100%" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  // color: "black",
                  display: "block",
                  padding: "0 2rem",
                  color: state.shades.secondary,
                  // backgroundColor: state.shades.LandingPageNavbackground,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip color="primary" bold="true" size="small" title="mode">
              <Button>
                <ModeToggle />
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LandingPageNav;
