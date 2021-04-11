import axios from "axios";
import React, { useState, useEffect } from "react";

const CreatePage = () => {
  const [createInput, setCreateInput] = useState("");
  const [createTime, setCreateTime] = useState("");

  const onCreate = () => {
    axios
      .post("http://localhost:1000/api/task", {
        TaskName: createInput,
        time: createTime,
      })
      .then(() => {
        setCreateTime("");
        setCreateInput("");
      });
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "48px",
          margin: "0.5rem 0",
        }}
      >
        Create
      </h1>
      <div>
        <input
          value={createInput}
          onChange={(e) => {
            setCreateInput(e.target.value);
          }}
        />
        <input
          value={createTime}
          type="datetime-local"
          onChange={(e) => {
            setCreateTime(e.target.value);
          }}
        />
        <button onClick={() => onCreate()}>Create</button>
      </div>
    </div>
  );
};

export default CreatePage;
