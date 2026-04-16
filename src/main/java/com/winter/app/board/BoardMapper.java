package com.winter.app.board;

import java.util.List;

public interface BoardMapper {
	
	//CRUD
	
	//R-read
	//List
	public List<BoardDTO> list()throws Exception;
	
	public BoardDTO detail(BoardDTO boardDTO)throws Exception;
	
	//C - create
	
	//U - update
	
	//D - delete

}
