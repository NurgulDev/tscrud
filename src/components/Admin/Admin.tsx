import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const Admin: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");

  function addProduct(newProduct: object) {
    let data: object[] = JSON.parse(localStorage.getItem("todoTs") || "[]");
    data.push(newProduct);
    localStorage.setItem("todoTs", JSON.stringify(data));
  }

  function handleProduct() {
    let newProduct = {
      name: name,
      lastName: lastName,
      image: image,
      id: Date.now(),
    };
    addProduct(newProduct);
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "60vh",
        gap: "2pc",
      }}
    >
      <Typography
        sx={{ fontSize: "30px", fontWeight: "bold", letterSpacing: "2px" }}
      >
        Create
      </Typography>
      <TextField
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "30%" }}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        sx={{ width: "30%" }}
        id="outlined-basic"
        label="LastName"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setImage(e.target.value)}
        sx={{ width: "30%" }}
        id="outlined-basic"
        label="Image"
        variant="outlined"
      />
      <Button
        onClick={handleProduct}
        sx={{
          width: "30%",
          background: "black",
          "&:hover": {
            background: "#fff",
            color: "black",
          },
        }}
        variant="contained"
      >
        create
      </Button>
    </Box>
  );
};

export default Admin;
