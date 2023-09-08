import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Recommendation from "../recommendation";
const Header = ({ products, setSearchedProducts }) => {
  // const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const targetItemId = "1"; // 表示したいアイテムのid

  // targetItemを関数外で宣言
  // const targetItem = data.find((item) => item.id === targetItemId);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://2f338ce1-8358-4109-a88b-929d6bbbcd07.mock.pstmn.io/"
  //     );
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     setShowPosts(targetItem ? [targetItem] : []);
  //   } catch (error) {
  //     console.error("データの取得に失敗しました。", error);
  //   }
  // };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    search(value);
  };

  const search = (value) => {
    const searchedProducts = products.filter(
      (product) =>
        product.name &&
        product.name.toString().toUpperCase().indexOf(value.toUpperCase()) !==
          -1
    );
    console.log("Search function called with value:", value);
    if (value === "") {
      setSearchedProducts(products); // すべての商品を表示
      return;
    }
    console.log("Searched products:", searchedProducts);
    setSearchedProducts(searchedProducts);
  };

  return (
    <StyledHeader>
      <BookIcons>
        <img className="book" src="../../../assets/book.png" alt="search" />
        <p>CampusBookTrade</p>
        <img className="icon" src="../../../assets/icon.png" alt="icon image" />
      </BookIcons>
      <Form>
        <input
          className="search-bar"
          placeholder="なにをお探しですか？"
          onChange={handleInputChange}
          value={inputValue}
        />
        <img
          className="search-mark"
          src="../../../assets/search.png"
          alt="search"
        />
      </Form>
      <img className="icon" src="../../../assets/icon.png" alt="icon image" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: white;
  margin-bottom: 103px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 45px;
  z-index: 1;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-bottom: 20px;
    flex-direction: column;
    display: block;
    margin: 0;
  }
  .icon {
    width: 150px;
    height: 150px;

    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      width: 50px;
      height: 50px;
      display: none;
    }
  }
`;

const BookIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  margin-left: 51px;
  margin-bottom: 17px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin: 17px 10px;
  }
  .book {
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      height: 50px;
      width: 50px;
    }
  }
  > p {
    color: #6f3f1a;
    font-size: 32px;
    text-align: center;
    margin: 0;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      font-size: 18px;
    }
  }
  .icon {
    display: none;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      display: block;
    }
  }
`;

const Form = styled.div`
  display: flex;
  width: 100%;

  > input {
    padding: 5px 0 5px 15px;
    border-width: 1.5px;
    border-color: black;
    border-right: 0;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    width: 100%;
    &:focus {
      outline: none;
    }
  }

  .search-mark {
    height: 45px;
    padding: 5px 10px 5px 0;
    border: 1.5px solid;
    border-left-width: 0px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: gray;
    }
  }
`;

export default Header;
