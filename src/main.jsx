import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter >
      <App />
      <CssBaseline />
    </HashRouter>
  </Provider>
);