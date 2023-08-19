import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";

const ImgBox = () => {
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
    <StyledImgBox>
      {targetItem && (
        <div>
          <StyledMainImg>
            <img src={targetItem.photo[0].photo} />
          </StyledMainImg>
          <StyledSubImg>
            <img src={targetItem.photo[1].photo} />
            <img src={targetItem.photo[2].photo} />
            <img src={targetItem.photo[3].photo} />
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
