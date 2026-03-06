package kr.co.iei.todo.model.vo;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Alias(value="todo")
public class Todo {
	private Integer todoNo;
	private String todoContent;
	private String todoWriter;
	private Integer todoDone;
	private String todoDate;
}
