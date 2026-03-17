import { useState } from "react";
import Header from "./components/commons/Header";
import TodoListPage from "./pages/TodoListPage";
import { Route, Routes } from "react-router-dom";
import TodoRegistPage from "./pages/TodoRegistPage";
import TodoViewPage from "./pages/TodoViewPage";
import TodoEditPage from "./pages/TodoEditPage";
import Sensor from "./components/rasp/Sensor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
        <Route path="/detail/:todoNo" element={<TodoViewPage />} />
        <Route path="/sensor" element={<Sensor />} />
      </Routes>
    </div>
  );
}

export default App;
