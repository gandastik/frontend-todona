import React from "react";
import axios from "axios";

const TestApi = () => {
    const [todo, setTodo] = React.useState([]);
    const [done, setDone] = React.useState([]);
    const [createInput, setCreateInput] = React.useState("");
    const [createTime, setCreateTime] = React.useState("");

    React.useEffect(() => {
        fetchTodoTask();
        fetchDoneTask();
    }, []);

    async function fetchTodoTask() {
        return axios.get("http://localhost:1000/api/tasks?isFinished=false").then((res) => {
            setTodo(res.data)}
            );
    }

    async function fetchDoneTask() {
        return axios.get("http://localhost:1000/api/tasks?isFinished=true").then((res) => {
            setDone(res.data)}
            );
    }

    function onCreate() {
        axios.post("http://localhost:1000/api/task", {
            TaskName: createInput,
            time: createTime,
        }).then(() => {
            setCreateInput("");
            setCreateTime("");
            fetchTodoTask();
        });
    }

    function onUpdate(id, isFinished) {
    //    console.log(id, isFinished);
        axios.put(`http://localhost:1000/api/task?id=${id}`,{
            isFinished: isFinished,
        }).then(() => {
            fetchTodoTask();
            fetchDoneTask();
        });
    }

    function onDelete(id) {
        axios.delete(`http://localhost:1000/api/task/${id}`).then(()=> {
            fetchTodoTask();
            fetchDoneTask();
        });
    }
    
    return <div>
        <div>
            <h1>Todo</h1>
            <ul>
                {todo.map((task) =>
                <li>
                    <span>{task.TaskName} </span>
                    <span>{task.time} </span>
                    <button onClick={() => onUpdate(task._id, true)}>✅</button>
                    <button onClick={() => onDelete(task._id)}>❌</button>
                </li>)}
            </ul>
        </div>
        <div>
            <h1>Done</h1>
            <ul>
                {done.map((task) =>
                <li>
                    <span>{task.TaskName} </span>
                    <span>{task.time} </span>
                    <button onClick={() => onUpdate(task._id, false)}>undo</button>
                    <button onClick={() => onDelete(task._id)}>❌</button>
                </li>)}
            </ul>
        </div>
        <div>
            <h1>Create</h1>
            <input value={createInput} onChange={(e) => {
                setCreateInput(e.target.value);
            }}
            />
            <input value={createTime} type="time" onChange={(e) => {
                setCreateTime(e.target.value);
            }}/>
            <button onClick={()=> onCreate()} >Create!!</button>
        </div>
    </div>
};

export default TestApi;