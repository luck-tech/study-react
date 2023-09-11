import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Buttons from "../../Molecules/Buttons";
import BREAKPOINT from "../../../variables/breakpoint.js";

const DataList = () => {
  const [data, setData] = useState([]);
  const targetItemId = "ef408730-0bef-45f9-9c82-61f602d14f87"; // 表示したいアイテムのid

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://uni-bo.net/api/items/");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };

  const targetItem = data.find((item) => item.id === targetItemId);

  return (
    <StyledDataList>
      {targetItem && (
        <div>
          <StyledName>{targetItem.name}</StyledName>
          <StyledPrice>
            {targetItem.price}円
            <span>(別途取引手数料50円を支払う必要があります)</span>
          </StyledPrice>
          <Buttons />
          <p>出品者：{targetItem.seller}</p>
          <p>本の状態：{targetItem.condition}</p>
          <p>受け取り可能キャンパス：{targetItem.receivable_campus}</p>
          <p>
            商品説明：
            <br />
            {targetItem.description}
          </p>
        </div>
      )}
    </StyledDataList>
  );
};

const StyledDataList = styled.div`
  padding: 5px 20px;
  background-color: #f3f0ec;
  color: #333333;
  border-radius: 5px;
  font-size: 12px;
  width: 60%;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
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

export default DataList;
