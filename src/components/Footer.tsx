import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "grey", color: "#ccc" }}>
      <p>© {new Date().getFullYear()} Spaceflight News — Powered by Spaceflight News API</p>
    </footer>
  );
};

export default Footer;
