import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "../../Atoms/User";
import send from "../../../assets/ei-send.png";

const Comment = () => {
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState("");
  const targetItemId = "ef408730-0bef-45f9-9c82-61f602d14f87"; // 表示したいアイテムのid

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://uni-bo.net/api/comment/");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") {
      return; // 空のコメントを送信させないため
    }

    try {
      await fetch("https://uni-bo.net/api/auth/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "4622013@ed.tus.ac.jp",
          password: "testtesttest",
        }),
      });
      const cookies = document.cookie; //HttpOnly属性を持つCookieはこれで取得できない疑惑
      const response = await fetch("https://uni-bo.net/api/comment/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies, //headerにクッキー(アクセストークンがくっついてる)を含めて送信
        },
        //credentials: "include", //ブラウザが持っているクッキーを送信
        body: JSON.stringify({ comment: newComment }),
      });

      if (response.ok) {
        console.log("Comment submitted successfully");
        setNewComment(""); // コメントフォームをクリアする
        fetchData(); // 新しいコメントを含めたデータベースを改めてfetchする
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  };

  const targetComment = data.find((item) => item.item_id === targetItemId);

  return (
    <StyledComment>
      <h2>コメント</h2>
      <div
        style={{
          display: targetComment && targetComment.comment ? "block" : "none",
        }}
      >
        <StyledMessage>
          <User />
          {targetComment && <p>{targetComment.comment}</p>}
        </StyledMessage>
      </div>
      <StyledInput>
        <input
          type="text"
          placeholder="コメントする"
          maxLength="50"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} //入力したものをvalueにセットする
        />
        <button className="send" onClick={handleCommentSubmit}>
          <img src={send} />
        </button>
      </StyledInput>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  > h2 {
    margin-top: 40px;
    font-weight: 400;
  }
`;

const StyledMessage = styled.p`
  > p {
    padding: 5px;
    background-color: #e8e8e8;
    border-radius: 5px;
    margin: 0;
    font-size: 12px;
  }
  margin: 0 0 40px;
  display: flex;
`;

const StyledInput = styled.div`
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
  .send {
    background-color: #6f3f1a;
    border-radius: 0 4px 4px 0;
    border: none;
    transition: 0.2s ease;
    &:hover {
      background-color: #d2b48c;
    }
    > img {
      width: 30px;
      height: 100%;
    }
  }
`;

export default Comment;
