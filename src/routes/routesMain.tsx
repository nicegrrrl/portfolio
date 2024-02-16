import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { ErrorPage } from "../pages/ErrorPage/errorPage";
import { AboutPage } from "../pages/AboutPage/aboutPage";
import { StacksPage } from "../pages/StacksPage/stacksPage";
import { ToolsPage } from "../pages/ToolsPage/toolsPage";
import { ProjectsPage } from "../pages/ProjectsPage/projectsPage";
import { ContactPage } from "../pages/ContactPage/contactPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/stacks" element={<StacksPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
