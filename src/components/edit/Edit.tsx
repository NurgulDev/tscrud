import { Box, Button, TextField, Typography } from "@mui/material";
import { log } from "console";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");





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
        Edit
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
        Save
      </Button>
    </Box>
  );
};

export default Edit;
