import React from "react";

import { Container } from "reactstrap";

import Header from "./Header";

import Footer from "./Footer";

import Banner from "./Banner"; 

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner /> {}
      <Container className="mt-4">{children}</Container>
      <Footer />
    </div>
  );
};



export default Layout;