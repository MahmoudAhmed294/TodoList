import React, { useState ,useEffect } from "react";
import { Modal, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';

import { addTask , updateTask } from '../../redux/actions/ListAction';

import "./addTaskStyle.css";

const AddTask = ({updataTask ,listOfTodo ,SetUpdateTask}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [updatedata, setUpdatedata] = useState("");

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    SetUpdateTask('')
    setTaskValue('')

  };
  const handleOk = () => {
    let date = new Date();
    if(!updataTask){

      dispatch(addTask({
        id:Math.random().toString(36).substr(2, 9),
        date:date.toLocaleString('en-US'),
        task:taskValue,
        done:false
        
      }))
    }
    else {
      dispatch(updateTask({
        id:updatedata.id,
        date:date.toLocaleString('en-US'),
        task:taskValue,
        done:false
        
      }))
      SetUpdateTask('')
      setUpdatedata('')
    }
    setIsModalVisible(false);
    setTaskValue('')
  };
useEffect(() => {

if(updataTask && listOfTodo){
 const getDateBeforeUpdate = listOfTodo.filter(value=> value.id == updataTask)
 if(getDateBeforeUpdate){
  setTaskValue(getDateBeforeUpdate[0].task)
  setIsModalVisible(true)
  setUpdatedata(getDateBeforeUpdate[0])
 }
}
}, [updataTask])
  return (
    <div className="addTask">
      <Button
        type="primary"
        className="addTaskBtn"
        shape="circle"
        onClick={showModal}
        icon={<PlusOutlined />}
      ></Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        footer={[
          <Input
            key="back"
            placeholder="Type Any Task"
            onChange={(e) => setTaskValue(e.target.value)}
            value={taskValue}
          />,
          <Button
            type="primary"
            key="cancel"
            className="modelBtn modelCancelBtn"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            key="Done"
            type="primary"
            onClick={handleOk}
            className="modelBtn modelDoneBtn"
          >
            Done
          </Button>,
        ]}
      ></Modal>
    </div>
  );
};

export default AddTask;
