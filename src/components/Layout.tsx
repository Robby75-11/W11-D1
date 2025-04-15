import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "2rem" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;