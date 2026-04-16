package com.winter.app.board;

import java.util.List;

public interface BoardMapper {
	
	//CRUD
	
	//R-read
	//List
	public List<BoardDTO> list()throws Exception;
	
	public BoardDTO detail(BoardDTO boardDTO)throws Exception;
	
	//C - create
	public int create(BoardDTO boardDTO)throws Exception;
	
	//U - update
	public int update(BoardDTO boardDTO)throws Exception;
	
	//D - delete
	public int delete(BoardDTO boardDTO)throws Exception;

}
