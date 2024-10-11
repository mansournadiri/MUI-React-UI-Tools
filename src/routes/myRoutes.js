import { Routes, Route, ScrollRestoration } from "react-router-dom";
import {
  AboutMe,
  Resume,
  SkillsServices,
  Portfolio,
  Contact,
  PageNotFound,
} from "../pages";

export const myRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<AboutMe pageTitle="About Me" />} />
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
        <Route path="portfolio" element={<Portfolio pageTitle="Portfolio" />} />
        <Route
          path="contact"
          element={
            <Contact
              pageTitleFirst="Contact Form"
              pageTitleSecond="Contact Information"
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
};
