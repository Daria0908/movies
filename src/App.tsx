import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/main";
import ElementPage from "./pages/element";
import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={"/:id"} element={<ElementPage id={1} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
