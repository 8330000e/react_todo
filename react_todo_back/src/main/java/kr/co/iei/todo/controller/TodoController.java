package kr.co.iei.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.todo.model.service.TodoService;
import kr.co.iei.todo.model.vo.Todo;

@CrossOrigin(value="*")
@RestController
@RequestMapping(value="/todos")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<?> selectAllTodo(){
		List<Todo> list = todoService.selectAllTodo();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<?> insertTodo(@RequestBody Todo todo){
		int result = todoService.insertTodo(todo);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping(value="/{todoNo}")
	public ResponseEntity<?> selectOneTodo(@PathVariable int todoNo){
		Todo todo = todoService.selectOneTodo(todoNo);
		return ResponseEntity.ok(todo);
	}
}
