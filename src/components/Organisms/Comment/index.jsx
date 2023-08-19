import React from "react";
import styled from "styled-components";
import Chatting from "../../Molecules/Chatting";
import Input from "../../Atoms/Input";

const Comment = () => {
  return (
    <StyledComment>
      <h2>コメント</h2>
      <Chatting />
      <Input />
    </StyledComment>
  );
};

const StyledComment = styled.div`
  > h2 {
    font-weight: 400;
  }
`;

export default Comment;
