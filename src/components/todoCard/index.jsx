import React from "react";

const Card = ({ onDone, onEdit, onDel, detail }) => {
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
          <button title="Done" id="done" onClick={onDone}>
            <i className="fas fa-check" />
          </button>
          <button title="Edit Task" id="edit" onClick={onEdit}>
            <i className="fas fa-pen" />
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
