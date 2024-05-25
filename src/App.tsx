import './App.css'
import {ChangeEvent, FC, useState} from "react";
import {ITask} from "./interfaces.ts";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setToDoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setToDoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
        console.log(todoList);
    }

    return (
        <>
            <div className="header">
                <div className="inputContainer">
                    <input type="text" placeholder="task..." name="task" value={task} onChange={handleChange}/>
                    <input type="number" placeholder="Deadline (in days)..." name="deadline" value={deadline}
                           onChange={handleChange}/>
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList"></div>
        </>
    )
}

export default App
