import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter);
  return(
    <div>
      <h1>{count.value}</h1>
      <div>
        <button onClick={() => dispatch(actions.increment(count.value))}>+</button>
        <button onClick={() => dispatch(actions.decrement(count.value))}>-</button>
      </div>
    </div>
  )
}
export default Counter;