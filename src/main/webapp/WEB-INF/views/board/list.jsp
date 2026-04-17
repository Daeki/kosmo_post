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
	
	<c:forEach items="${list}" var="d">
		<h3>${d.boardTitle}</h3>
	</c:forEach>
	
	
	
	
</body>
</html>