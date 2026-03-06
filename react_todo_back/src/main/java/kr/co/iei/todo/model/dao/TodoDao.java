package kr.co.iei.todo.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.todo.model.vo.Todo;

@Mapper
public interface TodoDao {

	List<Todo> selectAllTodo();

	int insertTodo(Todo todo);

	Todo selectOneTodo(int todoNo);

}
