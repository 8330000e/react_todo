import { useEffect, useState } from "react";
import style from "./pagelayout.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TodoModify from "../components/todo/TodoModify";

const TodoEditPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const todoNo = pathname.substring(6);
  const [todo, setTodo] = useState("");
  axios
    .get(`${import.meta.env.VITE_BACKSERVER}/todos/${todoNo}`)
    .then((res) => {
      setTodo(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className={style.page}>
      <h3 className={style.page_title}>TODO 수정하기</h3>
      <TodoModify todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default TodoEditPage;
