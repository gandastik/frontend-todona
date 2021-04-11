import axios from "axios";
import React, { useState } from "react";

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
          type="text"
          value={createInput}
          onChange={(e) => {
            setCreateInput(e.target.value);
          }}
          placeholder="Todo..."
          required
        />
        <input
          type="datetime-local"
          value={createTime}
          onChange={(e) => {
            setCreateTime(e.target.value);
          }}
          required
        />
        <button
          onClick={() => {
            if (createInput.length !== 0 && createTime.length !== 0) onCreate();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
