import ReactDOM from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";

const hist = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <App />
      <CssBaseline />
    </BrowserRouter>
  </Provider>
);