package com.winter.app.member;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@ToString
public class MemberDTO {
	
	@NotBlank
	@Length(max = 10, min = 2)
	private String username;
	private String name;
	private String password;
	private String phone;
	private String email;
	private LocalDate birth;
	
	private ProfileDTO profileDTO;

}
