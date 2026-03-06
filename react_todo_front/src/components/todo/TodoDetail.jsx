import { Link } from "react-router-dom";
import styles from "./todolist.module.css";
import { useState } from "react";

const TodoDetailPage = ({ viewTodo }) => {
  console.log(viewTodo());
  return (
    <div className={styles.detail}>
      <div className={styles.detail_btns}>
        <button onClick={() => {}}>수정</button>
        <button onClick={() => {}}>삭제</button>
      </div>
    </div>
  );
};
export default TodoDetailPage;
