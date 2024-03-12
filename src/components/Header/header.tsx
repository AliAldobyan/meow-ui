"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PetsIcon from "@mui/icons-material/Pets";
import { UserButton, useAuth } from "@clerk/nextjs";
import { toggle } from "@/redux/features/headerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

const pages = ["Voting", "Breeds", "Favorites"];

const Header: React.FC = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const dispatch = useDispatch<AppDispatch>();
  const anchorElNav = useAppSelector((state) => state.header.isOpen);

  const handleOpenNavMenu = () => {
    dispatch(toggle());
  };

  const handleCloseNavMenu = () => {
    dispatch(toggle());
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "lato, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEOW UI
          </Typography>

          {userId ? (
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
                // anchorEl={anchorElNav}
                // anchorEl={anchorElNav ? anchorElNav : null}
                anchorOrigin={{
                  vertical: "top",
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
                  mt: 6,
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      href={userId ? `/${page.toLowerCase()}` : "/"}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}

          <PetsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              // fontFamily: "lato, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEOW UI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                href={userId ? `/${page.toLowerCase()}` : "/"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    // fontFamily: "lato, sans-serif",
                    fontSize: "1rem",
                    hover: {
                      color: "black",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <UserButton afterSignOutUrl="/" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
