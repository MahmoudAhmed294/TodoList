import React, { useState } from "react";
import { Row, Col, Button, Tooltip } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import {selectedTask , deleteTask} from '../../redux/actions/ListAction'
import "./taskStyle.css";
const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  const [isTaskSelected, setIsTaskSelected] = useState(false);

  const SelectedTodo =()=>{
    dispatch(selectedTask(tasks))
  }
  return (
    <Row
      className="task"
      style={
        tasks.done
          ? { backgroundColor: " var(--selected-color)" }
          : { backgroundColor: " var(--notSelected-color)" }
      }
      onClick={SelectedTodo}
    >
      <Col span={24}>
        <Row justify="space-between" align="middle">
          <div className="task-rightPart">
            <p className="date">{tasks.date}</p>
            <p className="taskInfo">{tasks.task}</p>
          </div>
          <div className="Taskdelete">
            <Tooltip title="Delete">
              <Button danger shape="circle" icon={<DeleteFilled />} onClick={()=>dispatch(deleteTask(tasks.id))} />
            </Tooltip>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Task;
