import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Goods from "../../Atoms/goods";
const Recommendation = () => {
  return (
    <StyledRecommendation>
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
      <Goods />
    </StyledRecommendation>
  );
};

const StyledRecommendation = styled.div`
  background-color: white;
  display: grid;
  padding: 0;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width:${BREAKPOINT.MEDIUM}) {
    margin: 0px;
    grid-gap: 0;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Recommendation;
