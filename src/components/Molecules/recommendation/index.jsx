import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Goods from "../../Atoms/goods";
import CatalogPage from "../../Organisms/catalogPage";
import Header from "../header";

const Recommendation = () => {
  const products = [
    {
      id: "1",
      name: "商品1",
      price: 1500,
      imageUrl: "../../assets/ex_text.png",
    },
    {
      id: "2",
      name: "商品2",
      price: 2000,
      imageUrl: "../../assets/image 11.png",
    },
    {
      id: "3",
      name: "商品3",
      price: 2000,
      imageUrl: "../../assets/38014.png",
    },
    {
      id: "4",
      name: "商品4",
      price: 2000,
      imageUrl: "../../assets/38015.png",
    },
    {
      id: "5",
      name: "商品5",
      price: 2000,
      imageUrl: "../../assets/38016.png",
    },
  ];
  // const searchedProducts = products.filter(
  //   (product) =>
  //     product.name &&
  //     product.name.toString().toUpperCase().indexOf(value.toUpperCase()) !== -1
  // );
  // console.log("Searched products:", searchedProducts);
  // setSearchedProducts(searchedProducts);
  return (
    <StyledRecommendation>
      {/* searchedProducts に含まれる name に一致する商品だけ表示 */}
      {products
        // .filter((product) => searchedProducts.includes(product.name))
        .map((product) => (
          <Goods
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
    </StyledRecommendation>
  );
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
