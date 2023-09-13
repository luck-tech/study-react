import React, { useState } from "react";
import { z } from "zod";

const loginIdSchema = z.string().min(5).max(10);

export default function App() {
  const [loginId, setLoginId] = useState("");

  const handleChange = (event) => {
    setLoginId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      loginIdSchema.parse(loginId);
      alert(`成功`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loginId">loginId</label>
      <input
        type="text"
        name="loginId"
        id="loginId"
        value={loginId}
        onChange={handleChange}
        required="required"
      />
      <input type="submit" />
    </form>
  );
}
