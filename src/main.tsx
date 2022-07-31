import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/about/About";
import Footer from "./components/Footer";
import { store } from "./store/store";
import "./styles/main.scss";
// updated on codesandbox

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:code" element={<About />} />
      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);
