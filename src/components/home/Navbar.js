import React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

import Logo from "../../images/LTlogo.svg";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];
const NavContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#373e98",
}));
const LogoBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "0px",
  margin: "5px",
  "&:hover": {
    backgroundColor: "white",
  },
}));
const LogoImg = styled("img")(({ theme }) => ({
  width: 101,
  height: 91,
  color: "white",
  borderRadius: "1rem",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eeeeee",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  borderRadius: "1rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "black",
    fontWeight: "700",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <NavContainer position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">
                <LogoBtn>
                  <LogoImg className="logo" src={Logo} alt="logo" />
                </LogoBtn>
              </Link>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Roboto, sans-serif",
                textDecoration: "underline",
                textDecorationThickness: "1px",
                textUnderlineOffset: "8px",
              }}
              component="h4"
              fontWeight="light"
            >
              LEARN-TUBE
            </Typography>
          </Stack>
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: "white", display: "block" }}
                variant="contained"
                color="inherit"
              >
                {page}
              </Button>
            ))}
          </Box> */}

          {/* <Link to="/dsa">DSA</Link> */}

          <Box
            display="flex"
            justifyContent="center"
            columnGap="1rem"
            sx={{
              textDecoration: "underline",
              textDecorationThickness: "1px",
              textUnderlineOffset: "8px",
            }}
          >
            <Box sx={{ width: "60%" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "black" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {isAuthenticated === true ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => {
                    function handleLogout() {
                      if (setting === "Logout") {
                        logoutUser(dispatch);
                        localStorage.clear();
                      }
                      handleCloseNavMenu();
                    }

                    return (
                      <MenuItem key={setting} onClick={handleLogout}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <>
                <Link
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    textDecoration: "none",
                    fontWeight: "bolder",
                    color: "white",
                  }}
                  to="/login"
                >
                  <Typography variant="h6" component="h6" fontWeight="light">
                    LOGIN
                  </Typography>
                </Link>
                <Link
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    textDecoration: "none",
                    fontWeight: "bolder",
                    color: "white",
                  }}
                  to="/register"
                >
                  <Typography variant="h6" component="h6" fontWeight="light">
                    REGISTER
                  </Typography>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </NavContainer>
  );
};
export default Navbar;
