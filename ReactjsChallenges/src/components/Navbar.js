import React from "react";
import Head from "./bars/Head";
import Container from "./bars/container/Container";
import Section from "./section/Section";

const Navbar = () => {
  return (
    <>
      <header class="header alter1-header section text-contrast">
        <div class="container container">
          <Head />
          <Container />
        </div>
      </header>
      <Section />
    </>
  );
};

export default Navbar;
