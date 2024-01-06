import "./styles.scss";
import { Task, TasksListProps } from "../../../configs/types";
import TaskCard from "../Card/TaskCard";
import { Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { filterTasksByCompletion } from "../../../utils/utility";

const ALL_TASKS_TAB_INDEX = 0;

const List = ({ tasks, setTasks }: TasksListProps) => {
  const tabs: { label: string; tasks: Task[] }[] = useMemo(
    () => [
      {
        label: "All",
        tasks,
      },
      {
        label: "Completed",
        tasks: filterTasksByCompletion(tasks, true),
      },
      {
        label: "Incomplete",
        tasks: filterTasksByCompletion(tasks, false),
      },
    ],
    [tasks]
  );

  const [activeTabIndex, setActiveTabIndex] = useState(ALL_TASKS_TAB_INDEX);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTabIndex(newValue);
  };

  useEffect(() => {
    setFilteredTasks(tabs[activeTabIndex].tasks);
  }, [activeTabIndex, tabs]);

  return (
    <div className="tasks-viewer">
      <Tabs
        className="tabs"
        value={activeTabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: { height: "4px", backgroundColor: "white" },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Typography variant="body1" color="text.primary">
                {tab.label}
              </Typography>
            }
          ></Tab>
        ))}
      </Tabs>
      <div className="tasks-list">
        {filteredTasks.map((taskDetails, index) => (
          <TaskCard key={index} taskDetails={taskDetails} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default List;
