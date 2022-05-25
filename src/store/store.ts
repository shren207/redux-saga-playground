//store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import saga from "../sagas/saga";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
  // configureStore의 middleware로 logger를 추가해주면 상태가 변경될 때마다 콘솔에 상태를 출력해준다.
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 여기의 코드는 Redux store를 생성하며, 자동으로 redux devtools extension을 설정하기 때문에,
// 개발중에 계속해서 store를 검사할 수 있다.

//////////////////////////////////////

/*
configureStore()은 구식 문법인 createStore()를 대신하여 나온 toolkit의 문법으로,
store에 여러가지 유용한 default를 설정할 수 있다.
object를 인자로 받으며, 해당 object는 reducer 속성은 필수이며, middleware 속성은 optional이다.
https://redux-toolkit.js.org/api/configureStore
*/
