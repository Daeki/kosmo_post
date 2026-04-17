<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Board List Page</h1>
	
	<form action="./list">
		<select name="kind">
			<option value="v1">Title</option>
			<option value="v2">Contents</option>
			<option value="v3">Writer</option>
		</select>
		<input type="text" name="search">
		<button>검색</button>
	</form>
	
	
	<c:forEach items="${list}" var="d">
		<h3>${d.boardTitle}</h3>
	</c:forEach>
	
	<div>
		<c:forEach begin="${pager.start}" end="${pager.end}" var="i">
			<a href="./list?page=${i}">${i}</a>
		</c:forEach>
	</div>
	
	
	
	
</body>
</html>