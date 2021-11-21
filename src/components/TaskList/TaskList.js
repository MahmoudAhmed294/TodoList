import React , {useState} from "react";
import Task from "../task/Task";
import "./taskListStyle.css";
import AddTask from "../AddTask/AddTask";
import TaskControl from "../taskControl/TaskControl";
import { useSelector } from 'react-redux'

const TaskList = () => {
  
const listOfTodo = useSelector((state) => state.todo.task)
const [updataTask , SetUpdateTask] = useState('');
  return (
    <div className="taskList">
      {
       listOfTodo ? listOfTodo.map((value) =>(

          <Task tasks={value} key={value.id} />
        )
        ):''
      }
      <TaskControl SetUpdateTask={SetUpdateTask} />
      <AddTask  updataTask={updataTask} listOfTodo={listOfTodo} SetUpdateTask={SetUpdateTask}/>
    </div>
  );
};

export default TaskList;
