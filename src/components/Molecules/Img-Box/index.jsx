import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";

const ImgBox = () => {
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
    <StyledImgBox>
      {targetItem && (
        <div>
          <StyledMainImg>
            <img src={targetItem.images[0].photo_path} />
          </StyledMainImg>
          <StyledSubImg>
            <img src={targetItem.images[1].photo_path} />
            <img src={targetItem.images[2].photo_path} />
            <img src={targetItem.images[3].photo_path} />
          </StyledSubImg>
        </div>
      )}
    </StyledImgBox>
  );
};
const StyledImgBox = styled.div`
  margin: 0 20px 0 0;
  width: 40%;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin: 0 0 20px;
    width: 100%;
  }
`;
const StyledMainImg = styled.div`
  > img {
    width: 100%;
    padding-bottom: 10px;
  }
`;
const StyledSubImg = styled.div`
  display: flex;
  > img {
    padding: 0 5px;
    width: 33.33%;
  }
`;

export default ImgBox;
