//saga.ts
import { call, takeEvery, put } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
// typescript를 사용한다면 axios의 return 타입이 필요하기 때문에 AxiosResponse를 사용한다.
import { incrementByAmount } from "../features/counter/counterSlice";
import { sagaActions } from "./sagaActions";

const RANDOM_NUMBER_API =
  "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1";

const callAPI = async () => {
  const response = await axios.get(RANDOM_NUMBER_API);
  console.log(typeof response.data[0]); // number
  return response;
};

export function* fetchNumberSaga() {
  try {
    const result: AxiosResponse<[number]> = yield call(() => callAPI());
    yield put(incrementByAmount(result.data[0]));
  } catch (e) {
    yield put({ type: "NUMBER_SAGA_FAILED" });
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_NUMBER_SAGA, fetchNumberSaga);
}
