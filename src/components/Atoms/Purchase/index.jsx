import React from "react";
import styled from "styled-components";

const Purchase = () => {
  return (
    <StyledPurchase>
      <button className="purchase_button">購入する</button>
    </StyledPurchase>
  );
};

const StyledPurchase = styled.div`
  .purchase_button {
    border: none;
    background-color: #6f3f1a;
    color: #f5f5f5;
    border-radius: 4px;
    padding: 8px 20px;
    margin-right: 10px;
    transition: 0.2s ease;
    &:hover {
      background-color: #d2b48c;
    }
  }
`;

export default Purchase;
