package com.winter.app.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public int join(MemberDTO memberDTO, MultipartFile file) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

}
