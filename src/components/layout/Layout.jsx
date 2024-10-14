import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import "@fontsource/roboto";
import "./Layout.css";

export const Layout = () => {
  return (
    <div id="layout_container">
      <Navbar />
      <Outlet />
      <Footer />;
    </div>
  );
};
