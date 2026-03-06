package kr.co.iei.todo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.iei.todo.model.dao.TodoDao;
import kr.co.iei.todo.model.vo.Todo;

@Service
public class TodoService {
	@Autowired
	private TodoDao todoDao;

	public List<Todo> selectAllTodo() {
		List<Todo> list = todoDao.selectAllTodo();
		return list;
	}
	
	@Transactional
	public int insertTodo(Todo todo) {
		int result = todoDao.insertTodo(todo);
		return result;
	}

	public Todo selectOneTodo(int todoNo) {
		Todo todo = todoDao.selectOneTodo(todoNo);
		return todo;
	}
}
