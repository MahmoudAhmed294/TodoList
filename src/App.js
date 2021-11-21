import TaskList from './components/TaskList/TaskList';
import { Layout, Row } from 'antd';
import {getTask} from "./redux/actions/ListAction"
import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';
function App() {
  const {  Content } = Layout;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTask())
  // }, []);

  return (
    <>
    <h1 className="title">Todo List</h1>

    <Content style={{padding: ' 0 50px'}}  >

      <TaskList />
    </Content>
    </>

  );
}

export default App;
