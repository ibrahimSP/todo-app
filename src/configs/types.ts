export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface AddTasksFormProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface FilterTasksBoxProps {
  tasks: Task[];
  filterTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TaskCardProps {
  taskDetails: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
