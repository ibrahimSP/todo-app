import { Task } from "../configs/types";

export const filterTasksByCompletion = (tasks: Task[], completed: boolean) => {
  return tasks.filter((task) => task.completed === completed);
};
