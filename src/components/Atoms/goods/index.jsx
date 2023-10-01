import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";

const Goods = ({ name, price, images }) => {
  // const [data, setData] = useState([]);
  // const targetItemId = "1"; // 表示したいアイテムのid
  // const url = "http://127.0.0.1:8000/api/items/";

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`GETリクエストが失敗しました。ステータスコード: ${response.status}`);
  //     }
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("データの取得に失敗しました。", error);
  //   }
  // };

  // const targetItem = data.find((item) => item.id === targetItemId);

  return (
    <StyledGoods>
      <ImgBox>
        <img src={images} alt="商品画像" />
      </ImgBox>
      <Message>
        <p>{name}</p>
      </Message>
      <ImgPrice>
        <p>{`${price}円`}</p>
      </ImgPrice>
    </StyledGoods>
  );
};
//   return (
//     <StyledGoods>
//          {targetItem && (
//         <div>
//           <ImgBox>
//             <img src={targetItem.images} alt="商品画像" />
//           </ImgBox>
//           <Message>
//             <p>{targetItem.name}</p>
//           </Message>
//           <ImgPrice>
//             <p>{`${targetItem.price}円`}</p>
//           </ImgPrice>
//         </div>
//       )}
//     </StyledGoods>
//   );
// };

const StyledGoods = styled.div`
  background-color: white;
  margin: 15px 24px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin: 0px;
    border: 1px solid;
    border-color: white;
  }
`;
const ImgBox = styled.div`
  position: relative;
  padding: 10px 10px;
  background-color: #f3f0ec;
  border-radius: 5px;
  > img {
    height: 250px;
    object-fit: contain;
    box-sizing: content-box;
    width: 100%;
    background-color: white;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      margin: 0px;
      border: 1px solid;
      border-color: white;
    }
  }
`;

const Message = styled.div`
  > p {
    line-height: 1.4;
    -webkit-line-clamp: 2; //text-overflowでの三点リーダー実装は1行の時しか使えない
    display: -webkit-box; //webkitはIE, Firefoxに対応していないとのこと。改良の余地あり
    -webkit-box-orient: vertical;
    box-sizing: content-box;
    width: 100%;
    overflow: hidden;
    color: #6f3f1a;
    text-align: center;
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 0;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      display: none;
    }
  }
`;

const ImgPrice = styled.div`
  > p {
    color: #6f3f1a;
    text-align: right;
    font-weight: bold;
    border-radius: 0 20px 20px 0;
    font-weight: 700;
    font-size: 20px;
    bottom: 0;
    margin: 0;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      margin-bottom: 8px;
      font-size: 10px;
    }
  }
`;
export default Goods;
