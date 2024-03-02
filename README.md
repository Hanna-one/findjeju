# React Team Project - 제주도 구석구석

# ![logo](https://github.com/Hanna-one/findjeju/assets/141300455/2bc50313-07c4-4bb9-88cb-f6f436653c2d)


## 🖥️ 프로젝트 소개
제주도 여행 정보를 조회할 수 있는 사이트를 구현한 팀 프로젝트
<br>


## 🕰️ 개발 기간
* 2023.12.26 ~ 2023.01.13


## ✒️ 프로젝트 목표
1. REST API의 사용법을 학습하고 HTTP 메서드와 HTTP 상태 코드를 사용하여 RESTful API 구현하기
2. REACT의 Custom Hooks를 활용한 UI/UX 구현으로 SPA방식으로 빠른 UI 렌더링, 반응성 구현하기
3. Redux-Toolkit을 활용한 상태관리 
4. 데이터 CRUD와 다양한 이벤트 처리 기능을 구현하여 비즈니스 로직 학습하기
5. CSS Module을 이용한 CSS 진행

## 🧑‍🤝‍🧑 멤버구성
![image](https://github.com/Hanna-one/findjeju/assets/141300455/fea11203-cc64-46ca-a7fa-9dc6fc93e04e)


## ⚙️ 개발 환경
* **Language**
   * React
   * Redux-toolkit
   * Java Script
   * Node.js (express)
   * MYSQL
   * HTML/CSS/Sass/CSS Modules

* **Collaboration & Tools**
   * MySQL WorkBench
   * 공공데이터 API (Tour API, 기상청 API)
   * 카카오맵 API
   * Git/GitHub
   * Notion
     
## 📋 ERD
![image](https://github.com/Hanna-one/findjeju/assets/141300455/dea029a9-d5f5-420a-8857-10751f5fe198)

## 📌 주요 기능
#### ✔️ 로그인 
- 로그인 시 쿠키(Cookie) 및 세션(Session) 생성
- 유저 정보 저장 (Redux-Persist)
  
#### ✔️ 회원가입 
- 유효성 체크 (필요 정보 입력, 약관동의 입력)
- 이메일 인증 (nodemailer)
- 우편번호 검색 (카카오 우편 API)
- 프로필 사진 업로드 (multer)
- 로봇 인증 (react-google-recaptcha)

#### ✔️ 마이 페이지
- 회원정보 조회
- 로그아웃, 회원탈퇴

#### ✔️ 메인 페이지
- 이미지 슬라이드 (swiper)
- 5초마다 슬라이드 자동 변경, 다음&이전페이지 클릭 기능
- 지역 아이콘(제주도시/서귀포시) 클릭 시 해당 지역의 단기 날씨 정보 출력 (기상청 API)
- 지역 아이콘(제주도시/서귀포시) 클릭 시 해당 지역의 관광지, 맛집, 숙소 출력 (Redux-Toolkit, Tour API)
- 제주도의 14일간의 축제정보 출력 (Tour API)

#### ✔️ 카테고리 서브페이지
- 숙소/음식점/여행지/문화시설/레포츠/쇼핑 카테고리의 명칭, 사진을 12개씩 출력 (Tour API)
- 페이지네이션 (pagination)
  
#### ✔️ 공통 상세페이지 
- 숙소/음식점/여행지/문화시설/레포츠/쇼핑 카테고리의 상세정보 출력 (Redux-Toolkit, Tour API, 카카오맵 API)
- 댓글 작성, 수정, 삭제, 사진추가 기능 (CRUD, multer)

#### ✔️ 여행코스 상세페이지 
- 추천 여행코스의 위치, 총 거리, 코스개수, 코스별 사진과 상세 설명 출력
- 댓글 작성, 수정, 삭제, 사진추가 기능 (CRUD, multer)

#### ✔️ 축제 상세페이지 
- 축제의 상세정보, 사진, 위치, 추천여행지 출력 (Redux-Toolkit, Tour API, 카카오맵 API)

#### ✔️ 검색페이지 
- 검색 아이콘 클릭시 검색창 모달 생성
- 검색 키워드 로컬스토리지 저장
- 전체, 여행정보, 축제, 공연/행사, 여행코스 카테고리로 분류하여 검색결과 출력
- 검색결과 제목순, 최신순 정렬 기능


## 💻 화면구성
### 1️⃣로그인
![image](https://github.com/Hanna-one/findjeju/assets/141300455/a060cba4-9adb-482c-b38c-b1201d6f72c9)
### 2️⃣회원가입
![image](https://github.com/Hanna-one/findjeju/assets/141300455/198ce03e-707c-46b4-be7e-3093d9486aad)
### 3️⃣마이페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/d601aef7-6d3b-48dc-8726-d842f24f8501)
### 4️⃣메인페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/2feb3741-7d4d-462f-8791-96e0d88d5007)
### 5️⃣카테고리 서브페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/14beeb9e-50e7-4ea5-bf9f-764a2a2d3d7c)
### 6️⃣공통 상세페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/5a3f03c7-2071-46a2-bc8b-e3cf9c81863d)
### 7️⃣여행코스 상세페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/6bdecec1-f70a-45a6-a38b-6dca38387947)
### 8️⃣축제 상세페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/7164ac3b-5805-4805-9cb7-1cec6aad2e27)
![image](https://github.com/Hanna-one/findjeju/assets/141300455/9f2de672-9974-49db-b121-fdc933211eee)
### 9️⃣검색 페이지
![image](https://github.com/Hanna-one/findjeju/assets/141300455/6633f84d-cc54-4ca8-a904-67b3740fe7db)


## 🗂️🗂️담당 역할✨✨
### ✅ 메인페이지 
- 컴포넌트 분리 및 UI 구현
- **Redux-Toolkit을 통한 상태관리**
- 형제 컴포넌트에서 제주시, 서귀포시 선택할 경우 dispatch로 시군구 코드를 get하여 각 시의 숙소, 맛집 정보를 **공공데이터 API**를 활용하여 조회 및 출력
- 제주시, 서귀포시의 숙소/맛집 정보 중 이미지가 있는 정보만 조회하여 **4개씩 랜덤**으로 출력
    - onMouseEnter 이벤트를 구현하여 monseEnter 될 경우 넓이가 변하면서 사진이 확대됨
    - onToggle 이벤트를 구현하여 좋아요/좋아요취소 기능 반복 구현

https://github.com/Hanna-one/findjeju/assets/141300455/7a2f74ff-f484-42d4-9f32-87a91b38e8e7

### ✅ 상세페이지 
- 숙소, 음식점, 여행지, 문화시설, 레포츠, 쇼핑 카테고리별로 공공데이터API의 결과 출력
    - 공공데이터API인 tourAPI4.0의 **국문관광정보서비스 - 공통정보조회, 소개정보조회, 반복정보조회, 이미지정보 조회, 국문무장애여행서비스 - 무장애여행조회**를 통하여 결과 출력
    - 이미지정보가 2장 이상인 경우 **swiper 라이브러리**를 이용하여 마우스 슬라이드  또는 화살표 클릭시 슬라이드 및 페이징네이션 처리
- 카카오맵API로 해당 장소의 위치, 마커 지도 출력
- useRef와 scrollIntoView 함수를 활용하여 useScroll 커스텀훅 함수를 만듦 →  탭 메뉴인 사진보기, 상세정보, 여행톡, 추천여행를 누르면 각 메뉴로 스크롤 됨
- useLocation, clipBoard API를 활용하여 공유버튼 클릭시 클립보드에 현재 페이지 링크 복사됨

https://github.com/Hanna-one/findjeju/assets/141300455/abfe167d-ee08-4f08-9474-e87ed571a966

### ✅ 댓글기능(CRUD)
- 상세페이지 로딩되면 DB의 fj_review 댓글 데이터테이블 조회하여 댓글 리스트 출력
    - 댓글작성자, 프로필사진, 댓글내용, 사진(있을 경우), 작성일
- 회원의 로그인 여부를 localStorage의 데이터 유무로 확인하여 로그인한 경우는 댓글 작성창 활성화, 로그아웃한 경우는 댓글 작성창 비활성화
    - 회원이 작성한 리뷰가 있을 경우(=fj_review 데이터테이블의 id와 localStorage의 id 일치여부 확인 후 일치할 경우) 로그인하면 회원의 리뷰에만 삭제아이콘 보임
- multer 라이브러리를 이용하여 이미지파일 1개 첨부 가능 및 첨부 시 미리보기 기능 구현
- 댓글 작성 완료 시 해당 댓글 사항이 **DB에 등록**
### [ 댓글작성창 및 댓글 등록버튼 ]
1. 로그인 한 경우 : 댓글 작성창 활성화 및 사진등록 버튼 보임
2. 로그아웃 한 경우 : 댓글 작성창 비활성화 및 사진등록버튼 안보임
![finejeju_3reply](https://github.com/Hanna-one/findjeju/assets/141300455/79018d27-4d41-4c8e-8f4a-3e6c00678363)
### [ 댓글 목록 ]
1. 댓글 목록
2. 작성한 댓글의 회원이 로그인한 경우에만 해당 댓글에 삭제 아이콘 표시되어 삭제 가능
3. 댓글 목록의 개수를 여행톡 우측에 숫자로 표시
4. 이미지파일 첨부 시 미리보기 기능 구현
![finejeju_4reply](https://github.com/Hanna-one/findjeju/assets/141300455/5d44a1ff-2178-4fce-b807-c571683a6aa0)

https://github.com/Hanna-one/findjeju/assets/141300455/bf8c6421-b3de-4b3d-a44c-488e45b2df07
