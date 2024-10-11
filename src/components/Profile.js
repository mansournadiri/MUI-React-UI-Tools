import React from "react";
import "../assets/css/Profile.css";
import { Paper, Box, Typography, Button } from "@mui/material";
import myImage from "../assets/image/MyProfileImage.jpg";
import myBanner from "../assets/image/Full-Stack-Developer.jpg";
import { Download as DownloadIcon } from "@mui/icons-material";
import MyInfo from "../utils/MyInfo.js";
import MyPortfolio from "../utils/MyPortfolio.js";
import { ProfileTimeLine } from "./ProfileTimeLine.js";

export const Profile = () => {
  const { name, title } = MyInfo;
  return (
    <Paper>
      <figure className="myprofile-image">
        <img src={myImage} alt="mansour nadiri" />
      </figure>
      <Box className="myprofile">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </Box>
      <figure className="myprofile-cover">
        <img src={myBanner} alt="mansour nadiri" />
      </figure>
      <Box mt={2} mb={2}>
        <ProfileTimeLine data={MyPortfolio} />
      </Box>
      <Box pb={3} display="flex" justifyContent="center">
        <Button
          className="rounded-btn"
          variant="contained"
          endIcon={<DownloadIcon />}
        >
          <Typography variant="button">Download CV</Typography>
        </Button>
      </Box>
    </Paper>
  );
};
