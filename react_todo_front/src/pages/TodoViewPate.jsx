import { useLocation } from "react-router-dom";
import TodoDetailPage from "../components/todo/TodoDetail";
import styles from "./pagelayout.module.css";
import axios from "axios";

const TodoViewPage = () => {
  const location = useLocation();
  const todoNo = location.state;
  const viewTodo = () => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/todos/${todoNo}`)
      .then((res) => {
        if (res.data !== "") {
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      <TodoDetailPage viewTodo={viewTodo} />
    </div>
  );
};

export default TodoViewPage;
