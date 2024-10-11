import React from "react";
import { Paper, Box, Grid } from "@mui/material";
import { Work as WorkIcon, Book as BookIcon } from "@mui/icons-material";
import { PageHeaderTitle, ResumeTimeLine } from "../components";
import MyInfo from "../utils/MyInfo.js";

export const Resume = ({ pageTitle }) => {
  const { experiences, education } = MyInfo;
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <PageHeaderTitle pageTitle={pageTitle} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <ResumeTimeLine
              title="Work History"
              items={experiences}
              icon={<WorkIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResumeTimeLine
              title="Education History"
              items={education}
              icon={<BookIcon />}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
