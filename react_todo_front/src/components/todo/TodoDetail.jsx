import { Link, useNavigate } from "react-router-dom";
import styles from "./todolist.module.css";
import { useState } from "react";
import axios from "axios";

const TodoDetail = ({ todo }) => {
  const navigate = useNavigate();
  const deleteTodo = () => {
    const real = confirm("해당 TODO를 삭제하시겠습니까?");
    if (real) {
      axios
        .delete(`${import.meta.env.VITE_BACKSERVER}/todos/${todo.todoNo}`)
        .then((res) => {
          console.log(res);
          if (res.data === 1) {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={styles.detail_wrap}>
      <div className={styles.detail_info}>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? "진행중" : "완료"}
        </span>
        <span>No.{todo.todoNo}</span>
      </div>
      <ul className={styles.detail_content}>
        <li>
          <span>작성자</span>
          <span>{todo.todoWriter}</span>
        </li>
        <li>
          <span>내용</span>
          <span>{todo.todoContent}</span>
        </li>
        <li>
          <span>작성일</span>
          <span>{todo.todoDate}</span>
        </li>
      </ul>
      <div className={styles.detail_btns}>
        <Link to={`/edit/${todo.todoNo}`} todo={todo}>
          수정
        </Link>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};
export default TodoDetail;
