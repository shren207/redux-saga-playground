//Counter.tsx
import React, { useState } from "react";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
// useTypedSelector라는 custom hooks를 사용할 것이기에 useSelector를 import할 필요가 없다!
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { sagaActions } from "../sagas/sagaActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export function Counter() {
  const count = useTypedSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <div>
        {/* random으로 숫자 추가하기 */}
        <button
          onClick={() => dispatch({ type: sagaActions.FETCH_NUMBER_SAGA })}
        >
          Add Random number with Saga
        </button>
      </div>
    </div>
  );
}

// Increment 또는 Decrement 버튼을 클릭할 때마다 다음과 같이 진행된다.
// 1. 해당 action(increment, decrement)과 대응되는 redux action이 store로 dispatch된다.
// 2. counter slice reducer가 actions을 인지하고, 그 상태를 업데이트한다.
// 3. <Counter> 컴포넌트가 store로부터 새 상태를 인지하고, 새 값을 토대로 리렌더링한다.
