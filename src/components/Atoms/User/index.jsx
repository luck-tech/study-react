import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../../../assets/icon.png";

const User = () => {
  const [data, setData] = useState([]);
  const targetItemId = "ef408730-0bef-45f9-9c82-61f602d14f87"; // 表示したいアイテムのid

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://uni-bo.net/api/comment/");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };

  const targetUser = data.find((item) => item.item_id === targetItemId);

  return (
    <StyledUser>
      <StyledUserIcon>
        <a href="#">
          <img src={icon} />
        </a>
      </StyledUserIcon>
      {targetUser && <StyledUserName>{targetUser.user}</StyledUserName>}
    </StyledUser>
  );
};

const StyledUser = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 10px;
`;

const StyledUserName = styled.div`
  color: #000000;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 5ch;
`;

const StyledUserIcon = styled.div`
  > a > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default User;
