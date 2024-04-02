import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {



  const navigate = useNavigate()

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "black" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography onClick={()=> navigate("/admin")} sx={{ cursor:"pointer" }} variant="h6" component="div">
              Admin
            </Typography>
            <Typography  onClick={()=> navigate("/")}  sx={{cursor:"pointer", margin: "0 2pc", }} variant="h6" component="div">
              Home
            </Typography>
            <Typography sx={{cursor:"pointer"}} variant="h6" component="div">
              Basket
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
