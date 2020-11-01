const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({type: INCREMENT}); 
export const decrement = () => ({type: DECREMENT});

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type){  //action type이 뭐냐에 따라서 작업을 할거다 이말씀!
    case INCREMENT: //case INCREMENT일때는 기존의 STATE에다가 더하기 1한걸 리턴
      return state + 1;
    case DECREMENT:
      return state - 1; //dcrement일때는 state-1 한걸 리턴한다.
    default:
      return state;
  }
};

export default counter;
