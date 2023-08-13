import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../variables/breakpoint.js";

const ItemDetails = () => {
  return (
    <StyledItemDetails>
      <StyledItemInformation>
        <ImgBox>
          <ImgMain>
            <img src="../../assets/ex_text.png" />
          </ImgMain>
          <ImgSubs>
            <img src="../../assets/ex_text.png" />
            <img src="../../assets/ex_text.png" />
            <img src="../../assets/ex_text.png" />
          </ImgSubs>
        </ImgBox>
        <ItemExplanation>
          <ItemTitle>
            <h2>電磁気学 第二版</h2>
          </ItemTitle>
          <ItemPrice>
            <h3>2420円</h3>
          </ItemPrice>
          <Buttons>
            <button class="purchase">購入する</button>
            <img src="../../assets/svg/plus.svg" />
          </Buttons>
          <DetailList>
            <User>
              <UserIcon>
                <p>出品者:</p>
                <img src="../../assets/usericon.jpg" />
              </UserIcon>
              <UserName>ko_cha78</UserName>
            </User>
            <BookStatus>本の状態: ほぼ新品</BookStatus>
            <Campus>受け取り可能キャンパス: 葛飾</Campus>
            <Supplement>
              商品説明:
              <br />
              授業内で教科書を開くことがなかったのでとても綺麗です。
            </Supplement>
          </DetailList>
        </ItemExplanation>
      </StyledItemInformation>
      <StyledComment>
        <CommentHeader>
          <h2>コメント</h2>
        </CommentHeader>
        <CommentLog>
          <CommentUser>
            <img src="../../assets/usericon.jpg" />
            <p>kou</p>
          </CommentUser>
          <Chatting>
            <p>もっと安くならないですか？</p>
          </Chatting>
        </CommentLog>
        <CommentLog>
          <CommentUser>
            <img src="../../assets/usericon.jpg" />
            <p>kou</p>
          </CommentUser>
          <Chatting>
            <p>もっと安くならないですか？</p>
          </Chatting>
        </CommentLog>
      </StyledComment>
      <StyledForm>
        <input type="text" placeholder="コメントする" />
        <button class="push">＞</button>
      </StyledForm>
    </StyledItemDetails>
  );
};

const StyledItemDetails = styled.div`
  background-color: #ffffff;
  padding: 20px;
`;

const StyledItemInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    flex-flow: column;
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 40%;
  margin-right: 10px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`;

const ImgMain = styled.div`
  > img {
    width: 100%;
    padding-bottom: 10px;
  }
`;

const ImgSubs = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & > img {
    padding: 0 5px;
    width: 30%;
  }
`;

const ItemExplanation = styled.div`
  padding: 5px 20px;
  width: 60%;
  background-color: #f3f0ec;
  color: #6f3f1a;
  border-radius: 5px;
  font-size: 12px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ItemTitle = styled.div`
  > h2 {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
  }
`;
const ItemPrice = styled.div`
  > h3 {
    font-size: 16px;
    margin: 10px 0;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-bottom: 10px;
  > button {
    border: none;
  }
  .purchase {
    background-color: #6f3f1a;
    color: #f5f5f5;
    border-radius: 4px;
    padding: 5px 20px;
    margin-right: 5px;
  }
`;
const DetailList = styled.div`
  margin-bottom: 20px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const UserIcon = styled.div`
  display: flex;
  align-items: center;
  line-height: 20px;
  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid;
  }
  > p {
    margin: 0 5px 0 0;
  }
`;
const UserName = styled.p`
  margin: 0 0 0 2px;
  line-height: 20px;
`;
const BookStatus = styled.p``;
const Campus = styled.p``;
const Supplement = styled.p``;

const StyledComment = styled.div`
  width: 100%;
  height: 100%;
  color: #6f3f1a;
  margin-bottom: 20px;
`;
const CommentHeader = styled.p`
  > h2 {
    font-weight: 400;
    font-size: 16px;
  }
`;
const CommentLog = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const CommentUser = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 10px;
  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid;
  }
  > p {
    margin: 0;
    font-size: 1px;
  }
`;
const Chatting = styled.div`
  padding: 5px;
  background-color: #f3f0ec;
  border-radius: 5px;
  > p {
    margin: 0;
    font-size: 12px;
  }
`;

const StyledForm = styled.div`
  display: flex;
  > input {
    width: 100%;
    font-size: 12px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #c4c9d0;
    padding: 4px 0 4px 8px;
    &:focus {
      outline: none;
    }
  }
  .push {
    font-size: 12px;
    background-color: #6f3f1a;
    color: #f5f5f5;
    border-radius: 0 4px 4px 0;
    border: none;
  }
`;

export default ItemDetails;
