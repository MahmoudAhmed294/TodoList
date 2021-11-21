import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SELECTED_TASK
} from "../constants/actionTypes";

const initState ={
  task:[],
  selected:''
}
const todo = (state = initState , action) => {
  switch (action.type) {


      case CREATE_TASK:
        return { ...state,  task:[action.payload , ...state.task]  };

  
    case DELETE_TASK:
      return {
        ...state,
        task: state.task.filter((task ) => task.id !== action.payload)
    }

    case UPDATE_TASK:
      return{
        ...state,
        task:  state.task.map(value => 
        (value.id === action.payload.id ? action.payload : value))
        
      } 
    case SELECTED_TASK:
      return {...state , selected:action.payload}
      
    default:
      return state;
  }
};

export default todo;
