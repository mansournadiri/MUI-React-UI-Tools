import React from "react";
import {
  Paper,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PageHeaderTitle } from "../components";
import MySkillsServices from "../utils/MySkillsServices.js";
import { ArrowRight as RightIcon } from "@mui/icons-material";

const CardIcon = ({ icon: Icon }) => {
  return <Icon fontSize="large" color="primary" />;
};

export const SkillsServices = () => {
  const { services, skills } = MySkillsServices;
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Grid item>
          <PageHeaderTitle pageTitle="Services" />
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              {services?.map((item) => (
                <Grid key={item.id} item xs={12} md={4}>
                  <Paper sx={{ height: "100%" }} elevation={4}>
                    <Box p={3}>
                      <CardIcon icon={item.icon} />
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item mt={4}>
          <PageHeaderTitle pageTitle="Skills" />
        </Grid>
        <Grid mt={2} container spacing={2} sx={{ textAlign: "center" }}>
          {skills?.map((skill, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <Paper sx={{ height: "100%" }} elevation={4}>
                <Box p={2}>
                  <Typography variant="button">{skill.title}</Typography>
                  <List>
                    {skill.items?.map((item) => (
                      <ListItem key={item.id}>
                        <ListItemIcon>
                          <RightIcon color="primary" />
                          <ListItemText>
                            <Typography variant="body2">{item}</Typography>
                          </ListItemText>
                        </ListItemIcon>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};
