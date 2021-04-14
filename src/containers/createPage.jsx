import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./card.css";

const CreatePage = () => {
  const [createInput, setCreateInput] = useState("");
  const [createTime, setCreateTime] = useState("");
  const history = useHistory();

  const onCreate = () => {
    axios
      .post("https://backend-nodejs-todo.herokuapp.com/api/api/task", {
        TaskName: createInput,
        time: createTime,
      })
      .then(() => {
        setCreateTime("");
        setCreateInput("");
        history.push(`/`);
      });
  };

  return (
    <div className="CreatePage">
      <h1
        style={{
          fontSize: "48px",
          margin: "0.5rem 0",
        }}
      >
        Create
      </h1>
      <div className="card-container">
        <div className="card">
          <div className="container">
            <div className="info">
              <input
                className="task-input"
                type="text"
                value={createInput}
                onChange={(e) => {
                  setCreateInput(e.target.value);
                }}
                placeholder="Todo..."
                required
              />
              <br />
              <input
                className="time-input"
                type="datetime-local"
                value={createTime}
                onChange={(e) => {
                  setCreateTime(e.target.value);
                }}
                required
              />
            </div>
            <div className="btn-group">
              <button
                type="submit"
                title="save"
                id="done"
                onClick={() => {
                  if (createInput.length !== 0 && createTime.length !== 0)
                    onCreate();
                }}
              >
                <i className="fas fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
