import { INCREMENT, DECREMENT } from '../actions/index';
import { combineReducers } from 'redux';

const initState = {
  value: 0,
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: action.payload };
    case DECREMENT:
      return { ...state, value: action.payload };
    default: 
      return state;
  };
};

const rootReducer = combineReducers({ counter }); //combineReducer는 여러개의 리듀서를 결합해주는 메서드다.

export default rootReducer;