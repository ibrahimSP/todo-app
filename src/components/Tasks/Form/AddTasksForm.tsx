import { Button, IconButton, TextField, Typography } from "@mui/material";
import "./styles.scss";
import { Add, Check, Close } from "@mui/icons-material";
import { useState } from "react";
import { AddTasksFormProps, Task } from "../../../configs/types";

const AddTasksForm = ({ tasks, setTasks }: AddTasksFormProps) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isNameError, setIsNameError] = useState(false);

  const toggleAddingState = () => {
    setIsAddingTask((prev) => !prev);
  };

  const updateTaskName = (event: any) => {
    const nameValue = event.target.value;
    setTaskName(nameValue);

    if (nameValue.trim()) {
      if (isNameError) {
        setIsNameError(false);
      }
    } else {
      setIsNameError(true);
    }
  };

  const onTaskNameFieldClick = () => {
    if (isNameError) {
      setIsNameError(false);
    }
  };

  const onTaskNameFieldBlur = () => {
    if (isNameError) {
      setIsNameError(false);
    }
  };

  const onTaskNameFieldKeyDown = (event: any) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (!taskName.trim()) {
      setIsNameError(true);
      return;
    }
    const newTask: Task = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([newTask, ...tasks]);

    setTaskName("");
  };

  const stopEditingTaskName = () => {
    setIsAddingTask(false);
  };

  return (
    <div
      className={`add-tasks-form ${isAddingTask ? "is-adding" : ""}`}
      style={{
        border: `2px solid ${isNameError ? "#a53531" : "#778899"}`,
      }}
    >
      {isAddingTask ? (
        <div className="add-task-control">
          <TextField
            value={taskName}
            size="small"
            variant="outlined"
            placeholder="Add task name..."
            onChange={updateTaskName}
            inputProps={{ maxLength: 5000 }}
            onClick={onTaskNameFieldClick}
            onBlur={onTaskNameFieldBlur}
            onKeyDown={onTaskNameFieldKeyDown}
            autoComplete="off"
            type="text"
            autoFocus
          />
          <div className="field-actions">
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "transparent",
                },
                paddingTop: "4px",
              }}
              disabled={!taskName || isNameError}
              onClick={addTask}
            >
              <Check color={!taskName || isNameError ? "disabled" : "info"} />
            </IconButton>
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "transparent",
                },
                paddingTop: "4px",
              }}
              onClick={stopEditingTaskName}
            >
              <Close color="error" />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="add-task">
          <Button
            color="inherit"
            onClick={toggleAddingState}
            startIcon={<Add color="action" />}
          >
            <Typography variant="subtitle2" color="text.secondary" noWrap>
              Add a new task
            </Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddTasksForm;
