import axios from "axios";
import TodoRegist from "../components/todo/TodoRegist";
import styles from "./pagelayout.module.css";
import { useNavigate } from "react-router-dom";

const TodoRegistPage = () => {
  const navigate = useNavigate();
  //TODO를 백엔드서버에 보내서 등록하고, 성공하면 메인페이지로 전환하는 역할의 함수
  const registTodo = (todo) => {
    axios
      .post(`${import.meta.env.VITE_BACKSERVER}/todos`, todo)
      .then((res) => {
        if (res.data === 1) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 등록 페이지</h3>
      <TodoRegist registTodo={registTodo} />
    </div>
  );
};
export default TodoRegistPage;
