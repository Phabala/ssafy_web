# REST API

## 인터페이스란?
> API의 I : 인터페이스
- 사람은 "리모컨"만 있으면 TV 세부 사용법을 알 필요가 없다.
- 사람이 TV를 제어할 수 있도록 해주는 중간 다리 역할을 "인터페이스" 역할이라고 한다.
- **사용자가 쉽게 동작 및 사용하는데 도움을 주는 시스템**을 뜻한다.
- HW Interface는 물리적 접점을 뜻하고, SW Interface는 API 소스코드 접근 형태, 추상화 구현 등을 나타낸다.

## API
- Application Programming Interface
- 즉, 인터페이스를 소스코드 형태로 구현한 것을 의미
> GET / api/menus
> 모든 메뉴 가져오기

## REST API
> Representational State Transfer
- 소프트웨어 개발 아키텍처의 한 형식
- 자원을 이름으로 구분하고 자원의 상태를 주고 받는 모든 것
- 일반적으로 REST라 하면 HTTP를 통해 CRUD를 실행하는 API

## RESTful API
REST API 설계 방식에 맞게 설계한 API

### RESTful API 설계에 사용되는 주요 HTTP METHODs

#### GET
데이터를 읽거나 검색할 때, 웹사이트를 불러올 때 사용

#### POST
새로운 리소스를 생성할 때 사용
(로그인, 게시글 작성)
규정하기 애매하면 POST를 쓴다.

#### PATCH
일부 데이터를 수정할 때 사용

#### PUT
보통 전체 데이터를 수정할 때 사용

#### DELETE
삭제 요청시 사용

위의 METHODs 대로 요청을 안해도 동작하지만, RESTful 해지지는 않는다.

### RESTful API 설계법
> GET, POST, PATCH, DELETE가 전부 사용 가능한 환경에서의 예시
1. 잘못된 API 설계법 예시
    - 유저 전체 정보를 가져온다 `GET /user/all/get` -> get과 get 반복
    - 유저 등록 `POST /user/adduser` -> post와 adduser 반복
    - 특정 유저 조회 `GET /users/:id/get-information` -> get과 get 반복
    - 특정 유저 수정 `PATCH /users/:id/update` -> patch와 update 반복
    - 특정 유저 삭제 `DELETE /users/:id/delete` -> delete와 delete 반복
  
2. 올바른 API 설계
    1. HTTP METHOD는 동사로 하는 것이 좋다.
    2. 설계 URL은 명사로 하는 것이 좋다. (동작을 안 넣는것이 좋다)

    - 유저 전체 정보 가져오기 `GET /users`
    - 유저 등록 `POST /users`
    - 특정 유저 조회 `GET /users/id` -> id에 해당되는 user를 가져온다
    - 특정 유저 수정 `PATCH /users/:id` cf. `:`표시는 동적 ~~를 나타냄 (`:id` == id를 동적으로 가져옴)
    - 특정 유저 삭제 `DELETE /users/:id`

> GET이랑 POST만 가능한 환경도 있다. 그 때는 API설계를 할 때 약간의 공사가 필요하다.

## 웹 개발 방식
1. SSR
- 서버 사이드 렌더링(Server Side Rendering)
- GET과 POST만 가능한 환경
- 사용 프레임워크 : JSP(Java), EJS(Node)
> JSP : HTML + JAVA. 브라우저는 자바를 해석할 능력이 없기 때문에 JSP를 서버에서 읽어서 DB와 연동해 완성된 HTML을 만들어서 리턴해줌.
> GET, POST밖에 사용 불가능.

1. CSR
- 클라이언트 사이드 렌더링 (Client Side Rendering)
- GET, POST, PATCH, DELETE 가능한 환경

GET : a 태그 요청 href로 이동 GET
POST : form 태그 서버가 하나 --> 이게 뭔말이야

백엔드 서버와 클라이언트 서버가 따로 있다. <-- 협업하기 좋음. (SSR에 대한 설명인가?)
CSR: js로 비동기 요청을 해서 데이터를 바꾸는 형식 (이 사이에 로딩이 생긴다)
