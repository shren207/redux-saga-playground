// Redux toolkit 사용을 위해 createSlice를 import한다

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// createSlice는 createAction, createReducer를 합친 것이다.
// 코드량을 훨씬 줄여주는 redux-toolkit의 내장 함수이다.

export const counterSlice = createSlice({
  // slice를 만들기 위해서는 3가지가 필요하다.
  // 1. name : slice의 이름
  // 2. initial state : slice의 초기 상태
  // 3. reducers : slice의 리듀서
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // 원래 redux는 불변성을 유지해야 하기에 데이터를 복사하는 식으로 코드를 작성해야 하지만,
    // redux-toolkit을 사용하면 코드 작성을 mutate하게 할 수 있다.(Array.prototype.push 이런거 써도 된다는 뜻)
    // 하지만 내부 로직에서는 실제로 불변성을 유지하는데, 이는 redux-toolkit이 Immer 라이브러리를 사용하기 때문이다.
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// 위 코드처럼 counterSlice를 2번에 걸쳐서 리턴하지 말고
// export default counterSlice;
