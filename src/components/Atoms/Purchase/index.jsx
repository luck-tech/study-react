import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Purchase = () => {
  const [buyer, setBuyer] = useState();
  const targetItemId = "ef408730-0bef-45f9-9c82-61f602d14f87"; // 表示したいアイテムのid

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://uni-bo.net/api/items/");
      const jsonData = await response.json();
      const targetItemData = jsonData.find((item) => item.id === targetItemId);
      const buyerData = targetItemData.buyer;
      setBuyer(buyerData); //useStateのセット関数でbuyerにセット
      console.log(buyerData); //nullになる
      console.log(buyer); //undefined
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };
  console.log(buyer);

  return (
    <StyledPurchase>
      <button buyer={buyer} className="purchase_button">
        購入する
      </button>
    </StyledPurchase>
  );
};

const StyledPurchase = styled.div`
  .purchase_button {
    background-color: ${(props) => (!props.buyer ? "#6f3f1a" : "#d2b48c")};
    border: none;
    color: #f5f5f5;
    border-radius: 4px;
    padding: 8px 20px;
    margin-right: 10px;
    transition: 0.2s ease;
    &:hover {
      background-color: #d2b48c;
    }
  }
`;

export default Purchase;
