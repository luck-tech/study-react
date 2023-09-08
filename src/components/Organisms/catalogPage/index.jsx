import React, { useState } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Header from "../../Molecules/header";
import Recommendation from "../../Molecules/recommendation";
import Button from "../../Molecules/button";
const CatalogPage = () => {
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
  const [searchedProducts, setSearchedProducts] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  // const displayedProducts = searchValue
  //   ? products.filter(
  //       (product) =>
  //         product.name &&
  //         product.name.toLowerCase().includes(searchValue.toLowerCase())
  //     )
  //   : products;
  return (
    <StyledCatalogPage>
      {/* HeaderにsearchedProductsとsearchedProductsを渡す */}
      <Header
        products={products}
        searchedProducts={searchedProducts}
        setSearchedProducts={setSearchedProducts}
      />
      <Button />
      <Recommendation
        products={products}
        searchedProducts={searchedProducts} /*searchValue={searchValue}*/
      />
    </StyledCatalogPage>
  );
};

const StyledCatalogPage = styled.div`
  background-color: white;
`;

export default CatalogPage;
