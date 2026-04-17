package com.winter.app.pager;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Pager {
	
	//페이지 번호
	private Long page;
	
	//페이지당 보여줄 글의 갯수
	private Long perPage;
	
	//offset 번호
	private Long startNum;
	
	public Long getPage() {
		if(page==null||page<1) {
			this.page=1L;
		}
		return this.page;
	}
	
	
	public Long getPerPage() {
		if(perPage == null || perPage<1) {
			this.perPage=5L;
		}
		return this.perPage;
	}
	
	public void makeStartNum() {
		//1, 0: 2, 5
		this.startNum = (this.getPage()-1)*this.getPerPage();
	}
	
	

}
