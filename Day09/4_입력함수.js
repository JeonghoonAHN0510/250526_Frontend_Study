/*
[ 입력함수 ]
    1. confirm()
        - 브라우저에 확인/취소 알림창
        - 확인=true / 취소=false
    2. prompt()
        - 브라우저에 텍스트 입력 알림창
        - 텍스트 입력상자에 입력한 텍스트를 반환
    3. document.querySelector("선택자").innerHTML
        - HTML에 작성된 특정한 선택자의 텍스트 호출
    4. document.querySelector("선택자").value
        - HTML에 작성된 특정한 선택자의 value속성의 값 호출
*/
confirm( "(1) 입력해 주세요." );
prompt( "(2) 입력해 주세요." );
/*
[ 변수와 입력/출력함수 ] - 입력받은 결과물을 변수에 저장
    1. let 변수명 = confirm()
    2. let 변수명 = prompt()
*/
// 1. let 변수명 = confirm()
let result1 = confirm("확인 또는 취소를 클릭하세요.");
    // confirm("확인 또는 취소를 클릭하세요.") : 브라우저에서 확인/취소를 선택받는다.
    // let result1 = : 확인(true)/취소(false)가 result1에 저장된다.
console.log( result1 );
// 2. let 변수명 = prompt()
let result2 = prompt("사용자의 전화번호를 입력하세요.");
console.log( result2 );
/*
[ 자바스크립트 스타일 가이드 ]
    1. 들여쓰기 하기(필수)
    2. 세미콜론(;)으로 문장 구분하기
    3. 공백을 넣어 읽기 쉽게 작성하기
    4. 코드를 설명하는 주석 작성하기
    5. 식별자 작성 규칙 지키기
*/