import "./App.scss";
import Todo from "./components/TodoApp/Todo";
import Logo from "./assets/icons/todo.svg";
import { Typography } from "@mui/material";

export function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={Logo} alt="Todo logo" />
        <Typography variant="h3">The Tasks</Typography>
      </div>
      <Todo />
    </div>
  );
}

export default App;
