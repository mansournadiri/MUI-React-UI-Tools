import React, { useState } from "react";
import { useMount, useToggle } from "react-use";
import {
  Paper,
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { PageHeaderTitle, CardView } from "../components";
import MainPortfolio from "../utils/MainPortfolio.js";

export const Portfolio = ({ pageTitle }) => {
  const { category } = MainPortfolio;
  const [selectedTab, setSelectedTab] = useState("all");
  const [allItem, setAllItem] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [on, toggle] = useToggle(false);
  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    toggle(true);
  };
  useMount(() => {
    let allItemCategory = [];
    category.forEach((item) => {
      allItemCategory = [...allItemCategory, ...item.items];
    });
    setAllItem(allItemCategory);
    setSelectedItems(allItemCategory);
  });
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedItems(
      newValue === "all"
        ? allItem
        : category.find((item) => item.title.toLowerCase() === newValue)?.items
    );
  };
  const tabsmenu = category?.map((tab) => {
    return (
      <Tab
        key={tab.id}
        value={tab.title.toLowerCase()}
        label={<Typography variant="botton">{tab.title}</Typography>}
      />
    );
  });
  return (
    <>
      <Paper>
        <Box m={2} pl={2} pr={2} pt={6} pb={6}>
          <PageHeaderTitle pageTitle={pageTitle} />
          <Box mb={2}>
            <Tabs
              value={selectedTab}
              onChange={handleChangeTab}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                ml: 1,
                flexGrow: 1,
                display: "flex",
              }}
            >
              <Tab key={0} value="all" label="ALL"></Tab>
              {tabsmenu}
            </Tabs>
          </Box>
          <Grid container spacing={2}>
            {selectedItems?.map((item) => (
              <Grid item key={item.id} xs={12} md={6} lg={4}>
                <CardView
                  item={item}
                  onClick={() => handleSelectedItem(item)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
      {selectedItem && (
        <Dialog open={on} onClose={() => toggle(false)}>
          <DialogTitle>{selectedItem.title}</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", justifyContent: "center" }} mb={1}>
              <img
                style={{ width: "100%", maxHeight: "75vh" }}
                src={selectedItem.image}
                alt={selectedItem.title}
              />
            </Box>
            <DialogContentText sx={{ textAlign: "justify" }}>
              {selectedItem.description}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
