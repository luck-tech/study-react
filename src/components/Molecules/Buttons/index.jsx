import React from "react";
import styled from "styled-components";
import Purchase from "../../Atoms/Purchase";
import Good from "../../Atoms/Good";

const Buttons = () => {
  return (
    <StyledButtons>
      <Purchase />
      <Good />
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export default Buttons;
