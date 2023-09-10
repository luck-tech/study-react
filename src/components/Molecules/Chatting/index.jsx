import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "../../Atoms/User";

const Chatting = () => {
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

  const targetItem = data.find((item) => item.id === targetItemId);

  return (
    <StyledChatting>
      <StyledMessage>
        <User />
        {targetItem && <p>もう少し安くなりませんか？{targetItem.comment}</p>}
      </StyledMessage>
    </StyledChatting>
  );
};

const StyledChatting = styled.p`
  //display: ${(props) => (props.comment ? "block" : "none")};
`;
const StyledMessage = styled.p`
  > p {
    padding: 5px;
    background-color: #e8e8e8;
    border-radius: 5px;
    margin: 0;
    font-size: 12px;
  }
  margin: 0 0 40px;
  display: flex;
`;

export default Chatting;
