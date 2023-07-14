# Create React App - Todo List App
React 개인 과제 Lv4 23.07.03 ~ 23.07.14

# 프로젝트 소개
리액트 쿼리 & json 서버를 이용한 To Do List App - Hagra Todo.
할일 목록을 추가하고 목록을 삭제/상태변경을 할 수 있습니다.
목록을 클릭하면 상세 내용과 수정/삭제가 가능합니다.

# 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

# 구현기능
  - Todo 작성
  - Todo 조회
  - Todo 삭제
  - Todo 완료 상태 변경
  - Todo 상세페이지 이동
  - 회원가입 (아이디중복 / 유효성 검사)
  - 로그인/로그아웃 (로그인 상태에 따라 보여지는 버튼)
    
# API 명세

| 기능   | URL         | Method | Request                                      | Response                                             |
| ------ | ------------ | -------- | ------------------------------------------- | -------------------------------------------------- |
| Todo 전체 조회 | /todos | `GET`   |     | {"todos": [{"title": “제목","contents": "내용","isDone": true,"id": id ,"date": date}]} |
| Todo 단일 조회 | /todos/id| `GET`   |   |{"todos": [{"title": “제목","contents": "내용","isDone": true,"id": id ,"date": date}]}|
| Todo 작성 | /todos | `POST`     | {title,contents,isDone,id,date} |             |
| Todo 수정 | /todos/id    | `PATCH`    |   {title,contents,isDone,id}    |      |
| Todo 삭제 | /todos/id    | `DELETE`   | {id}     |      |
