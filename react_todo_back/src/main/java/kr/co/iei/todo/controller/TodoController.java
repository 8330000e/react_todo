package kr.co.iei.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.todo.model.service.TodoService;

@CrossOrigin(value="*")
@RestController
@RequestMapping(value="/todos")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
}
