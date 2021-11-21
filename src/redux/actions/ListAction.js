

import {
  CREATE_TASK,
  DELETE_TASK,
  UNSELECTED_TASK,
  SELECTED_TASK,
  UPDATE_TASK,
  GET_TASKS,
} from "../constants/actionTypes";


export const addTask = (data) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TASK, payload: data });
  } catch (err) {
    console.error(err.message);
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TASK, payload: id });
  } catch (err) {
    console.error(err.message);
  }
};

export const updateTask = (newValue) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TASK, payload: newValue });
  } catch (err) {
    console.error(err.message);
  }
};


export const selectedTask = (selected) => async (dispatch) => {
  try {
    dispatch({ type: SELECTED_TASK, payload: selected });
  } catch (err) {
    console.error(err.message);
  }
};


// export const unselectedTask = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: UNSELECTED_TASK, payload: id });
//   } catch (err) {
//     console.error(err.message);
//   }
// };
