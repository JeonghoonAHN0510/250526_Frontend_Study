/*
[ 숫자형 ] : 정수 / 실수 구분
    1. 정수 : 소수점이 없는 숫자
    2. 실수 : 소수점이 있는 숫자
        - 실수는 정밀한 계산이 불가능 -> 별도의 정밀한 함수가 필요하다.
*/
console.log(100);
console.log(typeof 100);                        // typeof 자료 : 자료의 자료형(종류) 반환

console.log( 0.1 + 0.2 );


// [ 문자열 ] : "" 또는 ''로 묶은 데이터

console.log(typeof "100");                      // String -> 숫자도 ""로 묶이면 문자열
console.log(typeof "안녕하세요");


// [ 이스케이프 문자 ] : 특정한 기능을 수행하는 특수문자

console.log("\\안녕1");                          // \\ : 백슬래시 출력
console.log("\'안녕2");                          // \' : 작음따옴표 출력
console.log("\"안녕3");                          // \" : 큰따옴표 출력
console.log("\n안녕4");                          // \n : 줄바꿈 처리
console.log("\t안녕5");                          // \t : 들여쓰기 처리

/* 
[ 템플릿 리터럴 ] : 문자열과 변수, 식을 섞어서 '하나의 문자열'을 만드는 표현 방식
    `(백틱) : Tab키 위에 위치
    ${ }로 변수 부분을 묶는다.
*/
console.log( "안녕" + "자바" );                  // + 연결 연산자를 이용한 자료 합치기
console.log( `${"안녕"}${"자바"}`);              // `` 묶음으로 자료 합치기

// '변수'와 '템플릿 리터럴' 활용
let name = 'Kim';
let classRoom = 204;
// 과거 방식
// 변수명 + "문자열" + 변수명 + "문자열"
console.log( name + "님, " + classRoom + "호 강의실로 입장하세요.");

// 백틱을 위한 방식(주로 사용)
// `${변수명} 문자열 ${변수명} 문자열`
console.log(`${name}님, ${classRoom}호 강의실로 입장하세요.`);

// [ 논리형(boolean) ] : 참(true) / 거짓(false)을 표현하는 자료형
console.log( true );
console.log( false );
console.log( typeof true );
console.log( typeof false );

// [ undefined ] : 자료형이 정의되지 않았을 때의 데이터 상태
let 과일상자;                                   // 변수를 선언하고 자료를 입력하지 않음
console.log( 과일상자 );                        // 자료가 없는 변수를 호출하면 undefined
// [ null ] : 데이터의 값이 유효하지 않은 상태
let 채소상자 = null;                            // 변수에 null이 입력된 상태, 라이브러리 함수들이 null을 반환하는 경우가 많음
console.log( 채소상자 );                        // 자료가 존재 or 유효하지 않음