# DB
## RDBMS(관계형 DBMS), 비관계형 DBMS
- 관계형 DBMS
  - 구조 및 제약조건 (스키마)를 만들고 값을 채워야 함
  - 대표적인 RDBMS : MySQL / Oracle
- 비관계형 DBMS
  - RDBMS의 구조로 저장하지 않는 DBMS를 뜻한다.
  - 비관계형 DBMS 마다 구조가 다양하다.
  - 대표적인 비관계형 DBMS
    - Mongo DB
    - Redis

## DB 배우는 이유
- 코테 통과
(현업에서는 거의 안쓴다, 웹에서는 ORM이나 스프링의 경우는 JPA를 쓴다.)
(신입한테는 DB를 안맡긴다, 적어도 4~5년 되야 한다.)

- 개발 목적이라면
장고는 ORM을 강제, Node.js는 ORM 안쓰고 SQL 구문으로 하는 것도 가능. (ORM 배우는건 힘들다.)
개인 개발할 때 도움이 될 수 있다.

# MySQL
- 중요정보
  - Open Source / 기업도 무료
  - DBMS에 포함된 도구
    - MySQL Server를 기본적으로 포함
    - MySQL Client 프로그램
      - GUI 용 : MySQL Workbench
      - CLI 용 : mysql
- 덜 중요 정보
  - C / C++ 로 제작 됨
  - 제작자 딸 이름 "My"에서 지어진 이름 (본인이 만든 "MariaDB" 도 동일)
  - Oracle 이 인수 함

# 임베디드 반에서 MySQL 기본기를 확립하는 이유
1. 임베디드 / IoT 개발시 Database 활용을 위함
2. 웹 개발시 활용을 위함
3. Database 코테 합격을 위함

# 설치 및 실행
**(몇가지는 생략)**

git clone 한 것 스키마에 넣는 방법: cmd를 해당 폴더 디렉토리에서 열어서 `mysql -u root -p > 스키마이름.sql`
>If you want to install with two large partitioned tables, run
>
>`mysql < employees_partitioned.sql`

Administrator 창에서 Management 에서 Server Status 에서
3306포트에서 돌아가고 있는 것이 인스턴스

# CRUD
SQL 언어는 영어와 문법 구조가 같다. 그래서 영미권 사람은 배울때 쉽지만 우리나라는 사정이 좀 다르다.

**Updqte, Delete 할 때는 Where가 반드시 붙는다.**
이거만 생각하면 매우 쉽다.

백엔드 개발자라면 무조건 PK로 접근하는 습관을 들여야 한다. (시간복잡도 O(1))