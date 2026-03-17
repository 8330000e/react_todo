import { Link } from "react-router-dom";
import styles from "./todolist.module.css";
import { useState } from "react";
import axios from "axios";

const TodoDetail = ({ todo }) => {
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
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoDetail;
