import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/main";
import ElementPage from "./pages/element";
import { Provider } from "react-redux";
import store from "./stores";
import RandomPage from "./pages/random";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={"/:id"} element={<ElementPage />} />
          <Route path={"/random"} element={<RandomPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
