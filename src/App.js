import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import { Header, Footer, Profile } from "./components";
import { orange, green } from "@mui/material/colors";
import {
  Routes,
  Route,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import {
  AboutMe,
  Resume,
  SkillsServices,
  Portfolio,
  Contact,
  PageNotFound,
} from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const currentMenu = location.pathname.replace("/", "");
    setActiveMenu(currentMenu.length > 0 ? currentMenu : false);

    document.title =
      currentMenu.length > 0
        ? `${currentMenu.toUpperCase()} - Mansour Nadiri | Full-stack Developer`
        : "Mansour Nadiri | Full-stack Developer";
  }, [location]);
  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Header activeMenu={activeMenu} />
            <Routes>
              <Route path="" element={<AboutMe pageTitle="About ME" />} />
              <Route path="resume" element={<Resume pageTitle="Resume" />} />
              <Route
                path="services"
                element={
                  <SkillsServices
                    pageTitleFirst="Services"
                    pageTitleSecond="Skills"
                  />
                }
              />
              <Route
                path="skills"
                element={
                  <SkillsServices
                    pageTitleFirst="Services"
                    pageTitleSecond="Skills"
                  />
                }
              />
              <Route
                path="portfolio"
                element={<Portfolio pageTitle="Portfolio" />}
              />
              <Route
                path="contact"
                element={
                  <Contact
                    pageTitleFirst="Contact Form"
                    pageTitleSecond="Information Data"
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ScrollRestoration />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
export default App;
