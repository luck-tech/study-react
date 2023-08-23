import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "../../Atoms/User";
import send from "../../../assets/ei-send.png";

const Comment = () => {
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState("");
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

  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") {
      return; // 空のコメントを送信させないため
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/comments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment: newComment }),
        }
      );

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

  const targetItem = data.find((item) => item.id === targetItemId);

  return (
    <StyledComment>
      <h2>コメント</h2>
      <StyledChatting>
        <StyledMessage>
          <User />
          {targetItem && <p>もう少し安くなりませんか？{targetItem.comment}</p>}
        </StyledMessage>
      </StyledChatting>
      <StyledInput>
        <input
          type="text"
          placeholder="コメントする"
          maxLength="50"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
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

const StyledChatting = styled.p`
  //display: ${(props) => (props.comment ? "block" : "none")};
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
