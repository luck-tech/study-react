import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Header from "../../Molecules/header";
import Recommendation from "../../Molecules/recommendation";
import Button from "../../Molecules/button";

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
  {
    id: "6",
    name: "hoge",
    price: 2000,
    imageUrl: "../../assets/38016.png",
  },
];

// const search = (value) => {
//   const searchedProducts = products.filter(
//     (product) =>
//       product.name &&
//       product.name.toString().toUpperCase().indexOf(value.toUpperCase()) !==
//         -1
//   );
//   console.log("Search function called with value:", value);
//   if (value === "") {
//     setSearchedProducts(products); // すべての商品を表示
//     return;
//   }
//   console.log("Searched products:", searchedProducts);
//   setSearchedProducts(searchedProducts);
// };

const CatalogPage = () => {

  // 検索ワード
  const [searchValue, setSearchValue] = useState("");
  
  // const [products, setProducts] = useState([])
  // useEffect(async()=> {
  //   // APIサーバーからデータを取得
  //  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())

  //   console.log(todos)
  //   // 取得したデータをsetProductsでproductsにセット
  //   setProducts(todo)
  // },[])

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  })


  

  return (
    <StyledCatalogPage>
      {/* HeaderにsearchedProductsとsearchedProductsを渡す */}
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Button />
      <Recommendation
        products={products}
        searchedProducts={filteredProducts} /*searchValue={searchValue}*/
      />
    </StyledCatalogPage>
  );
};

const StyledCatalogPage = styled.div`
  background-color: white;
`;

export default CatalogPage;
