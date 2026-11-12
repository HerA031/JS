// 1) 전역 변수 globalMessage 선언 ("Hello Global")
const globalMessage='Hello Global'

// 2) 함수 displayMessage 선언
//    → 지역 변수 localMessage 선언 ("Hello Local!")
//    → globalMessage, localMessage 출력

// 3) displayMessage() 호출
function displayMessage() {
    console.log(globalMessage);
}

displayMessage();

// 4) 함수 밖에서 globalMessage 출력 → 접근 가능
// 5) 함수 밖에서 localMessage 출력해 보기 → ReferenceError 발생
console.log(globalMessage);
