import { Typography } from "@mui/material";

export const PageHeaderTitle = ({ pageTitle }) => {
  return (
    <Typography mb={2} variant="h6" sx={{ textDecoration: "underline" }}>
      {pageTitle}
    </Typography>
  );
};
