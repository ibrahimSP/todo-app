import "./styles.scss";
import { useState } from "react";
import List from "../Tasks/List/List";
import { Task } from "../../configs/types";
import AddTasksForm from "../Tasks/Form/AddTasksForm";

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Buy some flowers", completed: false },
    {
      id: 2,
      name: "I should investigate more about interesting topics like supernova and lunar eclipse",
      completed: true,
    },
    { id: 3, name: "Study math", completed: true },
    { id: 4, name: "Learn spanish", completed: false },
  ]);

  return (
    <div id="todos-wrapper">
      <div className="actions">
        <AddTasksForm tasks={tasks} setTasks={setTasks} />
      </div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Todo;
