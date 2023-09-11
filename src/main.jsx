import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
      <CssBaseline />
    </BrowserRouter>
  </Provider>
);