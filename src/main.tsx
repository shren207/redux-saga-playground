import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 다음부터는 redux 설정을 위한 모듈 import

import { store } from "./store/store";
import { Provider } from "react-redux";
// 내가 작성한 redux store를 import하고,
// App 컴포넌트를 Provider 컴포넌트로 감싸준다.
// 그리고 Provider의 prop으로 store를 전달한다.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 즉, Provider는 store를 전달하는 역할을 한다.
// 또한 이렇게 작성하는 것이 국룰인 듯 하다(전부 다 이렇게 씀)
