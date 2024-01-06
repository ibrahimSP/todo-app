import "./styles.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  CardMedia,
  Typography,
} from "@mui/material";
import { TaskCardProps } from "../../../configs/types";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";

const TaskCard = ({ taskDetails, setTasks }: TaskCardProps) => {
  const { name: initialName, completed } = taskDetails || {};

  const [name, setName] = useState(initialName);
  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    if (taskDetails) {
      const { name, completed } = taskDetails;
      setName(name);
      setChecked(completed);
    }
  }, [taskDetails]);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    taskDetails.completed = event.target.checked;

    // Uptade task.
    setTasks((tasks) => {
      const updatedTaskIndex = tasks.findIndex(
        (task) => taskDetails.id === task.id
      );
      tasks[updatedTaskIndex].completed = event.target.checked;
      return [...tasks];
    });
  };

  const onTaskClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    // Delete task.
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== taskDetails.id);
    });
  };

  return (
    <Card
      className="task-wrapper"
      sx={{ boxShadow: 2, borderRadius: "12px" }}
      onClick={onTaskClick}
    >
      <CardActionArea>
        <CardContent sx={{ padding: "12px 14px" }}>
          {name && (
            <div className="task-form-control">
              <Checkbox
                onChange={handleCheckbox}
                checked={checked}
                onClick={(event) => event.stopPropagation()}
                color="warning"
              />
              <Typography
                variant="body1"
                onClick={onTaskClick}
                noWrap
                sx={{
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {name}
              </Typography>
            </div>
          )}
        </CardContent>
        <CardMedia
          sx={{
            ":hover": {
              svg: {
                color: "#EC4C47",
                width: "100%",
                height: "100%",
              },
            },
          }}
          onClick={handleDeleteClick}
        >
          <div className="delete-task" style={{ background: "#282c34" }}>
            <div style={{ padding: "4px" }}>
              <Delete sx={{ color: "#506176" }} />
            </div>
          </div>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
