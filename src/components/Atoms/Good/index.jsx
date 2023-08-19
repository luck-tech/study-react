import React, { useState } from "react";
import styled from "styled-components";

const Good = () => {
  const [buttonColor, setButtonColor] = useState("#c7c7cc");

  const handleClick = () => {
    const newColor = buttonColor === "#c7c7cc" ? "#fb5151" : "#c7c7cc";
    setButtonColor(newColor);
  };

  return (
    <StyledGood>
      <button style={{ color: buttonColor }} onClick={handleClick}>
        ♥
      </button>
    </StyledGood>
  );
};

const StyledGood = styled.div`
  > button {
    width: 35px;
    height: 35px;
    color: #c7c7cc;
    border: transparent;
    border-radius: 50%;
    transition: 0.2s ease;
    background-color: #ffffff;
  }
`;

export default Good;
