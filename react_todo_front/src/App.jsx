import { useState } from "react";
import Header from "./components/commons/Header";
import TodoListPage from "./pages/TodoListPage";
import { Route, Routes } from "react-router-dom";
import TodoRegistPage from "./pages/TodoRegistPage";
import TodoViewPage from "./pages/TodoViewPate";
import TodoEditPage from "./pages/TodoEditPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
        <Route path="/detail/:todoNo" element={<TodoViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
