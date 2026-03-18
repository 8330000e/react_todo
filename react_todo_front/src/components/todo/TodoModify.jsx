import { useState } from "react";
import styles from "./TodoRegist.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoModify = ({ todo, setTodo }) => {
  const navigate = useNavigate();
  const inputTodo = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (todo.todoContent === "" || todo.todoWriter === "") {
      return;
    }
    axios
      .put(`${import.meta.env.VITE_BACKSERVER}/todos/${todo.todoNo}`, todo)
      .then((res) => {
        console.log(res);
        if (res.data === 1) {
          navigate(`detail/${todo.todoNo}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles.input_wrap}>
        <label htmlFor="todoWriter">작성자</label>
        <input
          type="text"
          id="todoWriter"
          name="todoWriter"
          value={todo.todoWriter}
          onChange={inputTodo}
        />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          id="todoContent"
          name="todoContent"
          value={todo.todoContent}
          onChange={inputTodo}
        />
      </div>
      <div className={styles.buttons_wrap}>
        <button className={styles.btn} type="submit">
          등록하기
        </button>
      </div>
    </form>
  );
};

export default TodoModify;
