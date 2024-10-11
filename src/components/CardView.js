import React from "react";
import { Paper, Box, Typography } from "@mui/material";

export const CardView = ({ item, onClick }) => {
  return (
    <Paper
      elevation={4}
      sx={{ height: "100%", cursor: "pointer" }}
      onClick={onClick}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} pt={1}>
        <img
          src={item.image}
          style={{ width: "100%", height: "200px" }}
          alt={item.title}
        />
      </Box>
      <Box mt={1} ml={1} mr={1}>
        <Typography variant="subtitle2">{item.title}</Typography>
      </Box>
      <Box mt={1} ml={1} mr={1}>
        <Typography variant="caption">{item.description}</Typography>
      </Box>
    </Paper>
  );
};
