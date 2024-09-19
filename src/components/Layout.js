import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
