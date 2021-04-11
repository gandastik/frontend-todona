import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// import Card from "../components/editCard";

const EditPage = () => {
  const [task, setTask] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fecthTasks();
    // console.log(task);
  });

  const fecthTasks = async () => {
    const res = await axios.get(`http://localhost:1000/api/tasks/${id}`);
    setTask(res.data);
  };

  const onSubmit = () => {
    axios.put(`http://localhost:1000/api/task/?id=${id}`, {
      TaskName: taskName,
      isFinished: task.isFinished,
      time: time,
    });
    history.push(`/`);
  };

  const currentDate = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = "" + (date.getMonth() + 1);
    var day = "" + date.getDate();

    if (day.length < 2) day = "0" + day;
    if (month.length < 2) month = "0" + month;

    return year + "-" + month + "-" + day;
  };

  const currentTime = () => {
    const date = new Date();
    var hour = "" + date.getHours;
    var min = "" + date.getMinutes;

    if (hour.length < 2) hour = "0" + hour;
    if (min.length < 2) min = "0" + min;

    return hour + ":" + min;
  };

  return (
    <div>
      <h1>Edit</h1>
      <form>
        <div className="container">
          <div className="info">
            <input
              className="task-input"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              placeholder="Todo..."
              required
            />
            <br />
            <input
              className="time-input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="datetime-local"
              min={currentDate() + "T" + currentTime()}
              required
            />
          </div>
          <div className="btn-group">
            <button
              type="submit"
              title="Save"
              onClick={() => {
                if (
                  taskName.length > 0 &&
                  new Date(currentDate() + "T" + currentTime()) < new Date(time)
                )
                  onSubmit();
              }}
              id="done"
            >
              <i className="fas fa-check" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
