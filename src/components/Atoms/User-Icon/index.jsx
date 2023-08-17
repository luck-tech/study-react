import React from "react";
import styled from "styled-components";
import icon from "../../../assets/icon.png";

const UserIcon = () => {
  return (
    <StyledUserIcon>
      <a href="#">
        <img src={icon} />
      </a>
    </StyledUserIcon>
  );
};

const StyledUserIcon = styled.div`
  > a > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default UserIcon;
