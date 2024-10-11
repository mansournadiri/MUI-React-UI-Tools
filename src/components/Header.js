import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
} from "@mui/material";
import { Home as HomeIcon, Send as SendIcon } from "@mui/icons-material";

export const Header = ({ activeMenu }) => {
  const tabs = [
    { title: "Resume", link: "resume" },
    { title: "Skill & Services", link: "skills" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Contact", link: "contact" },
  ];
  const tabsmenu = tabs?.map((tab, i) => {
    return (
      <Tab
        key={tab.link}
        value={tab.link}
        label={<Typography variant="botton">{tab.title}</Typography>}
        component={Link}
        to={tab.link}
      />
    );
  });
  return (
    <Paper>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters={true}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              curson: "pointer",
              color: "text.primary",
              textDecoration: "none",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            p={2}
            component={Link}
            to="/"
          >
            <HomeIcon />
          </Box>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              ml: 1,
              flexGrow: 1,
              display: "flex",
            }}
            value={activeMenu}
          >
            {tabsmenu}
          </Tabs>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="rounded-btn"
            sx={{
              marginRight: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Typography variant="button">Hire me</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
