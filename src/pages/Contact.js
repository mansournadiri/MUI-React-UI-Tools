import React, { useState } from "react";
import {
  Paper,
  Grid,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { PageHeaderTitle } from "../components";
// import { MyPortfolio } from "../utils/MyPortfolio.js";
import MyPortfolio from "../utils/MyPortfolio.js";

export const Contact = ({ pageTitleFirst, pageTitleSecond }) => {
  const filterItem = ["Email", "Phone", "Address"];
  const ContactItem = MyPortfolio.filter((item) =>
    filterItem.includes(item.title)
  );

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleData = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleSubmit = (event) => {
    const validationErrors = {};
    event.preventDefault();
    if (!formdata.name.trim())
      validationErrors.name = "Please enter your name.";
    if (!formdata.email.trim())
      validationErrors.email = "Please enter your email.";
    // else if (!/\S+@\S+\.\S+/.test(formdata.email))
    //   validationErrors.email = "your email is invalid.";

    if (!formdata.message.trim() && formdata.message.length <= 20)
      validationErrors.message =
        "Please enter your message, at least 20 charachter";
    setErrors(validationErrors);
    console.log(errors);
  };
  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PageHeaderTitle pageTitle={pageTitleFirst} />
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formdata.name}
                    onChange={handleData}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formdata.email}
                    onChange={handleData}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
                    value={formdata.message}
                    multiline
                    rows={4}
                    onChange={handleData}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <PageHeaderTitle pageTitle={pageTitleSecond} />
            {ContactItem?.map((e, index) => (
              <Stack key={index} mb={1}>
                <Typography variant="subtitle2">{`${e.title}:`}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.value}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
