import { useEffect, useState } from "react";
import CreateTask from "../../../components/CreateTask";
import ListTasks from "../../../components/ListTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-slate-100 w-[950px] h-screen flex flex-col items-center pt-4 gap-16">
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
      </div>
    </DndProvider>
  );
};

export default AddTask;
