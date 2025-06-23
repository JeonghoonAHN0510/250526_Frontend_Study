/*
[ 웹스토리지 ]
    - 웹브라우저 -> F12 -> Application -> Local/Session Storage
    - 도메인마다 웹스토리지가 할당됨.
    1. 종류
        1) Session Storage
            - 브라우저가 실행되는 동안만 저장
            - 브라우저를 닫으면 자동으로 데이터가 사라짐
            - 일회성 정보 저장
        2) Local Storage
            - 사용자가 직접 삭제하지 않으면 데이터를 영구 저장
            - 설정 정보, 팝업(다시보지않기), 자동로그인 정보 저장
    2. 사용법(session/local 동일)
        1) sessionStorage.setItem( '속성명(키)', '속성값' );    : 웹스토리지 자료 대입
        2) sessionStorage.getItem( '속성명(키)' );              : 웹스토리지 자료 호출
        3) sessionStorage.removeItem( '속성명(키)' );           : 웹스토리지 자료 삭제
        4) sessionStorage.clear();                              : 웹스토리지 전체 삭제
            * 속성명(키)는 무조건 *문자*만 가능
            * 속성값은 무조건 *리터럴*만 가능(객체/배열 타입 저장 불가능)
[ JSON ] *********복습 제대로 하기*************
    - Java Script Object Notation / 자바스크립트 객체 문법의 형식
    - 자바 객체를 문자열 타입이지만, 객체 형식으로 표현한 것.
    - { age : 40 }      : 객체타입, 객체모양
    - "{ age : 40 }"    : 문자열타입, 객체모양
    - 쓰는 이유? 인터넷 상의 데이터통신하는 http는 객체지향이 아니다. -> 문자열/바이트로 변환 필요
    - 한국( 객체 -> "객체" ) ----------http-----------> 일본( "객체" -> 객체 )
    1. 사용법
        1) JSON.stringify( 자료 );      : 해당 자료 -> 문자열 타입 변환
        2) JSON.parse( 자료 );          : 해당 자료 ->   JS   타입 변환
*/

// [1] 웹스토리지 제어 객체
console.log( sessionStorage );  // 현재 웹스토리지에 저장된 자료를 갖는 객체 반환
console.log( localStorage );    // 현재 웹스토리지에 저장된 자료를 갖는 객체 반환
// [2] 웹스토리지 자료 대입
sessionStorage.setItem( 'name', '유재석' );
localStorage.setItem( 'age', 40 );
// [3] 웹스토리지 자료 호출
console.log( sessionStorage.getItem( 'name' ));     // 유재석
console.log( localStorage.getItem( 'age' ));        // 40
console.log( localStorage.getItem( 'phone' ));      // null, 존재하지 않는 속성명
// [4] 웹스토리지 자료 삭제
sessionStorage.removeItem( 'name' );                // name 속성 삭제
console.log( sessionStorage.getItem('name'));       // null, 삭제했기 때문에 존재 X
localStorage.clear();                               // 전제 삭제
console.log( localStorage );                        // localStorage 전체 삭제
// [5] 웹스토리지 JSON 객체 저장
// sessionStorage.setItem( 'm1', ['유재석', 40] );                          // 불가능   -> {m1: '유재석,40') -> [ ]가 포함이 안 됨
sessionStorage.setItem( 'm1', JSON.stringify(['유재석', 40]) );             // 가능     -> {m1: '["유재석",40]'}
localStorage.setItem( 'm2', JSON.stringify( {name : '유재석', age : 40 }))  // 가능     -> {m2: '{"name":"유재석","age":40}}
// [6] 웹스토리지 JSON 객체 호출
console.log( sessionStorage.getItem( 'm1' ) );              // 불가능   -> ["유재석",40]    -> 문자열타입
console.log( JSON.parse(sessionStorage.getItem( 'm1' )) );  // 가능     -> ['유재석', 40]   -> 배열타입