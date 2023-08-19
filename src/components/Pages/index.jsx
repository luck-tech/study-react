import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../variables/breakpoint.js";
import ImgBox from "../Molecules/Img-Box";
import Comment from "../Organisms/Comment";
import DataList from "../Organisms/Data-List";

const MainPage = () => {
  return (
    <StyledMainPage>
      <StyledItemInformation>
        <ImgBox />
        <DataList />
      </StyledItemInformation>
      <Comment />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div``;
const StyledItemInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    flex-flow: column;
  }
`;

export default MainPage;
