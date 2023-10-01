import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Goods from "../../Atoms/goods";
import CatalogPage from "../../Organisms/catalogPage";
import Header from "../header";

const Recommendation = ({ searchedProducts }) => {
  console.log(searchedProducts);
  // const searchedProducts = products.filter(
  //   (product) =>
  //     product.name &&
  //     product.name.toString().toUpperCase().indexOf(value.toUpperCase()) !== -1
  // );
  // console.log("Searched products:", searchedProducts);
  // setSearchedProducts(searchedProducts);
  if (searchedProducts.length === 0) {
    return (
      <StyledRecommendation>
        検索結果はありませんでした
      </StyledRecommendation>
    );
  } else{
    return (
      <StyledRecommendation>
        {searchedProducts
          .map((product) => {
            console.log("product:", product.name); // 商品名をデバッグ出力
            return (
              <Goods
                key={product.id}
                name={product.name}
                price={product.price}
                images={product.images[0].photo_path}
              />
            );
          })}
      </StyledRecommendation>
    );}
};

const StyledRecommendation = styled.div`
  background-color: white;
  display: grid;
  padding: 0;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin: 0px;
    grid-gap: 0;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Recommendation;
