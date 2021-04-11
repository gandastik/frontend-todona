import React from "react";
import "./card.css";

const Card = ({ onUndone, onDel, detail }) => {
  return (
    <div className="card">
      <div className="container">
        <div className="info">
          <h4 className="task">{detail.TaskName}</h4>
          <p className="time">
            {new Date(detail.time).toLocaleString([], {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>
        <div className="btn-group">
          <button title="Mark as Undone" id="unDone" onClick={onUndone}>
            <i className="fas fa-undo" />
          </button>
          <button title="Delete" id="del" onClick={onDel}>
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
