const setRenderBackground = async () => {
  // body의 background 주소를 넣어도 OK
  // 일부러 axios 요청으로 이미지를 받아오기
  // blob -> 이미지, 사운드, 비디오 등 멀티미디어 데이터를 다룰 때 사용
  const result = await axios.get("https://picsum.photos/1920/1080", {
    responseType: "blob",
  });
  console.log(result.data);
  // URL.createObjectURL -> 임시 URL을 만든다(페이지 내에서만 유효)
  // 받아온 데이터를 임시 URL을 만들어서 그 URL에 body에 넣는다.
  const imageURL = URL.createObjectURL(result.data);
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
};
// 시간 갱신
const setTime = () => {
  const timer = document.querySelector(".timer");

  setInterval(() => {
    // date 함수
    const date = new Date();
    console.log(date);
    console.log(date.getHours());
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }, 1000);
};

const getMemo = () => {
  // localStorage로부터 가져와서 memo에 넣어주는 작업
  const memo = document.querySelector(".memo");
  memo.textContent = localStorage.getItem("todo");
};

const setMemo = () => {
  const memoInput = document.querySelector(".memo-input");
  memoInput.addEventListener("keyup", (e) => {
    // e.code 입력시 -> 누른 키보드 조회
    // console.log(e.code);
    // console.log(e.target);
    // console.log(e.target.value);
    // e.code 가 Enter인 경우에만 메모를 바꿀 수 있도록
    // !, null, undefined, false, "" -> 부정의 의미
    // if(e.target.value) -> 위 부정의 의미가 아닌 경우를 통합
    // if(!e.target.value) -> 부정의 의미인 경우
    if ((e.code === "Enter" || e.code === "NumpadEnter") && e.target.value) {
      // 메모를 저장
      const memo = document.querySelector(".memo");
      memo.textContent = e.target.value;

      // 메모가 날아가지 않도록 저장
      // 백엔드 -> DB에 저장해서 가져오는 작업
      // 브라우저에도 간단한 저장소 개념이 있다. localStorage
      // localStorage 사용법
      // localStorage.setItem('키', '넣을값')
      localStorage.setItem("todo", e.target.value);
      // localStorage.getItem('키') -> 값을 가져온다
      // getMemo로 분리
      getMemo();
      e.target.value = "";
    }
  });
};

const deleteMemo = () => {
  // 이벤트 위임
  // cf. 이벤트 캡쳐링: 부모에서 자식으로 이벤트 전달, 버블링: 자식에서 부모로 이벤트 전달

  // 똑같은 함수를 수백만개에 addEveneListener에 전달했다고 가정했을 때, 속도 저하
  document.addEventListener("click", function (e) {
    console.log(e.target);
    // e.target.ClassList가 hello 인 경우에 ~ 이벤트 실행
    // localStorage 를 지워야 하고
    localStorage.removeItem("todo");
    if (e.target.classList.contains("memo")) {
      localStorage.removeItem("todo");
      e.target.textContent = "";
    }
    // HTML파트도 지워야 한다
  });
};

const allRender = () => {
  setRenderBackground();
  setTime();
  setMemo();
  getMemo();
  deleteMemo();
  // 5초마다 해당 콜백함수 반복
  //   setInterval(() => {
  //     setRenderBackground();
  //   }, 5000);
};

allRender();
