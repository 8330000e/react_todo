package kr.co.iei.todo.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.iei.todo.model.dao.TodoDao;

@Service
public class TodoService {
	@Autowired
	private TodoDao todoDao;
}
