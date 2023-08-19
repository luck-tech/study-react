import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Message = () => {
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
    //<StyledMessage>{targetItem && <p>{targetItem.comment}</p>}</StyledMessage>
    <StyledMessage>もっと安くならないですか？</StyledMessage>
  );
};

const StyledMessage = styled.p`
  padding: 5px;
  background-color: #e8e8e8;
  border-radius: 5px;
  margin: 0;
  font-size: 12px;
`;

export default Message;
