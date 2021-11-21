import { Row, Button, Tooltip } from "antd";
import {
  DeleteFilled,
  EditFilled,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import React, { useState, useEffect } from "react";
import "./taskControlStyle.css";
import {
  deleteTask,
  selectedTask,
  updateTask,
} from "../../redux/actions/ListAction";

import { useSelector, useDispatch } from "react-redux";

const TaskControl = ({SetUpdateTask}) => {
  const [selectedTaskData, setSelectedTaskData] = useState("");

  const dispatch = useDispatch();

  const selectedTask = useSelector((state) => state.todo.selected);

  useEffect(() => {
    setSelectedTaskData(selectedTask);
  }, [selectedTask]);

  const deleteSelectedTask = () => {
    dispatch(deleteTask(selectedTask.id));
    setSelectedTaskData("");
  };
  const selectedIsDone = () => {
    const taskIsDone={
      id:selectedTaskData.id  ,
    date:selectedTaskData.date,
    task:selectedTaskData.task,
    done:true
    }
    dispatch(updateTask(taskIsDone))
  };

  const selectedIsNotDone = () => {
    const taskIsDone={
      id:selectedTaskData.id  ,
    date:selectedTaskData.date,
    task:selectedTaskData.task,
    done:false
    }
    dispatch(updateTask(taskIsDone))
  };

  const updateSelected =()=>{
    SetUpdateTask(selectedTaskData.id)
  }
  return (
    <Row justify="space-between" align="middle" className="taskControl">
      <div className="taskControl-rightPart">
        <p className="date">{selectedTaskData.date}</p>
        <p className="taskInfo">
          {selectedTaskData.task
            ? selectedTask.task
            : "please select your Task"}
        </p>
      </div>
      <div className="listControllerIcon">
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<DeleteFilled />}
          onClick={deleteSelectedTask}
        />
        <Button type="primary" shape="circle" icon={<EditFilled />} onClick={updateSelected} />
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<CloseOutlined />}
          onClick={selectedIsNotDone}
        />
        <Button type="primary" danger shape="circle" icon={<CheckOutlined />}     onClick={selectedIsDone}/>
      </div>
    </Row>
  );
};

export default TaskControl;
