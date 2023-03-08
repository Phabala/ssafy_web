# Front-end Framework 필요성

## Front-end Framework 필요성
**DOM 제어의 변경과 Component 기반 웹 개발을 위함**
- Component 단위로 조립식으로 웹페이지 UI 개발 (생산성 향상, 가독성 향상)
- Virtual DOM : jQuery의 비효율적 DOM 제어 개선 (웹페이지 성능 향상)

## Browser가 HTML을 출력하는 원리
**Browser가 HTML / CSS 을 전달받은 후 Display 까지의 과정**
1. HTML Parsing 하여 DOM Tree 생성
2. Render Tree 생성
    - 각 DOM Tree의 Node Style 정보를 입힌다.
3. Layout 과정
    - 각 Render Tree Node들의 출력 할 좌표가 계산되어 정해진다.
4. Painting
    - 이미지 / Color를 입혀 출력을 준비하는 과정

## Virtual DOM의 필요성
**일반적인 DOM 변경 발생시 Render Tree 부터 재시작이 이루어진다.**
- Render Tree 과정 : 모든 DOM에 Style 정보를 다시 입히는 과정
- DOM 제어를 할 때마다, Client Browser의 속도 저하가 발생한다.
- 만약, 10개의 DOM을 순차적으로 변경할 경우, 총 10회 Render Tree를 추가 재생성한다.

## Virtual DOM 동작 방식
**속도 개선을 위한 Virtual DOM Tree 동작 과정**
1. 진짜 DOM Tree 기반으로, Virtual DOM Tree를 생성한다.
2. DOM 제어를 Virtual DOM Tree에 모두 적용한다.
3. 모든 DOM 제어를 끝났을 때, Virtual DOM Tree를 진짜 DOM Tree에 적용한다.
4. 렌더링을 시작한다.