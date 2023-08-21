import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BREAKPOINT from "../../../variables/breakpoint";
import Header from "../../Molecules/header";
import Recommendation from "../../Molecules/recommendation";
import Button from "../../Molecules/button";

const catalogPage = () => {
  return (
    <StyledCatalogPage>
      <Header />
      <Button />
      <Recommendation />
      
    </StyledCatalogPage>
  );
};

const StyledCatalogPage = styled.div`
  background-color: white;
`;


export default catalogPage;
