import send from "../../../assets/ei-send.png";
import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledInput>
      <input type="text" placeholder="コメントする" />
      <button className="send">
        <img src={send} />
      </button>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  > input {
    width: 100%;
    font-size: 12px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #c4c9d0;
    padding: 4px 0 4px 8px;
    &:focus {
      outline: none;
    }
  }
  .send {
    background-color: #6f3f1a;
    border-radius: 0 4px 4px 0;
    border: none;
    transition: 0.2s ease;
    &:hover {
      background-color: #d2b48c;
    }
    > img {
      width: 30px;
      height: 100%;
    }
  }
`;

export default Input;
