import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Buttons from "../../Molecules/Buttons";

const DataList = () => {
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
    <div>
      {targetItem && (
        <StyledDataList>
          <StyledName>{targetItem.name}</StyledName>
          <StyledPrice>
            {targetItem.price}円
            <span>(別途取引手数料50円を支払う必要があります)</span>
          </StyledPrice>
          <Buttons />
          <StyledSellerId>出品者：{targetItem.seller_id}</StyledSellerId>
          <StyledCondition>本の状態：{targetItem.condition}</StyledCondition>
          <StyledReceivableCampus>
            受け取り可能キャンパス：{targetItem.receivable_campus}
          </StyledReceivableCampus>
          <StyledWritingState>
            商品説明：
            <br />
            {targetItem.writing_state}
          </StyledWritingState>
        </StyledDataList>
      )}
    </div>
  );
};

const StyledDataList = styled.div`
  padding: 5px 20px;
  background-color: #f3f0ec;
  color: #333333;
  border-radius: 5px;
  font-size: 12px;
`;

const StyledName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
const StyledPrice = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  > span {
    font-weight: 400;
    font-size: 10px;
    margin-left: 10px;
  }
`;
const StyledSellerId = styled.p``;
const StyledCondition = styled.p``;
const StyledReceivableCampus = styled.p``;
const StyledWritingState = styled.p``;

export default DataList;
