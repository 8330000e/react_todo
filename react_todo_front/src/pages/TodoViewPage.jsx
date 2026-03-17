import { useLocation } from "react-router-dom";
import styles from "./pagelayout.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoDetail from "../components/todo/TodoDetail";

const TodoViewPage = () => {
  const location = useLocation();
  const todoNo = location.state.todo.todoNo;
  console.log(todoNo);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/todos/${todoNo}`)
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      <TodoDetail todo={todo} />
    </div>
  );
};

export default TodoViewPage;
