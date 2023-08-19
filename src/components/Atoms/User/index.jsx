import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../../../assets/icon.png";

const User = () => {
  const [data, setData] = useState([]);
  const targetItemId = "1"; // 表示したいアイテムのid

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://2f338ce1-8358-4109-a88b-929d6bbbcd07.mock.pstmn.io/"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };

  const targetItem = data.find((item) => item.id === targetItemId);

  return (
    <StyledUser>
      <StyledUserIcon>
        <a href="#">
          <img src={icon} />
        </a>
      </StyledUserIcon>
      {targetItem && <StyledUserName>{targetItem.seller_id}</StyledUserName>}
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
`;

const StyledUserIcon = styled.div`
  > a > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default User;
