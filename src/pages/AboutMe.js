import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { PageHeaderTitle } from "../components";

const Label = (props) => {
  const { children } = props;
  return (
    <Typography
      {...props}
      variant="body2"
      sx={{ textAlign: "justify", justifyContent: "inter-word" }}
    >
      {children}
    </Typography>
  );
};

export const AboutMe = ({ pageTitle }) => {
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <PageHeaderTitle pageTitle={pageTitle} />
        <Label mt={4}>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </Label>
        <Label mt={2}>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </Label>
        <Label mt={2}>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </Label>
      </Box>
    </Paper>
  );
};
