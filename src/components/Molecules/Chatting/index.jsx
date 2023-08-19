import React from "react";
import styled from "styled-components";
import User from "../../Atoms/User";
import Message from "../../Atoms/Message";

const Chatting = () => {
  return (
    <StyledChatting>
      <User />
      <Message />
    </StyledChatting>
  );
};

const StyledChatting = styled.div`
  display: flex;
  justify-content: center;
`;

export default Chatting;
