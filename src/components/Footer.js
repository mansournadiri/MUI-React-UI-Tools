import React from "react";
import { Box, AppBar, Toolbar, Grid, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Box mt={2} mb={2}>
      <AppBar xs={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Grid container p={2} alignItems="center" direction="row">
            <Grid item xs>
              <Typography variant="button">@Mansour Nadiri</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" display="flex" justifyContent="right">
                React Js Project with MUI Design
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
