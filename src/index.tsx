import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Routes } from "./routes";
import { setupLanguage } from "./sperta-lang/setup";

setupLanguage();
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
