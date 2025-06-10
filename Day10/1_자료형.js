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

/*
[ 배열 ] : 하나의 변수에 여러 개의 값을 저장
    - ,(쉼표)로 구분해서 [ ](대괄호)에 묶는다.
    - 인덱스 : 순서대로 배정된 번호, 0 부터 시작]
    - [ [ ] ] : 배열 안에 배열 가능
*/
let season = [ "봄" , "여름" , "가을" , "겨울" ];
// 인덱스:  [0]    [1]      [2]      [3]         length = 4;
// 배열 호출하기
// 1. 배열 내 모든 요소 반환
    console.log( season );
// 2. 배열 내 특정 인덱스의 요소 반환
    console.log( season[0] ); // 봄
    console.log( season[1] ); // 여름
    console.log( season[2] ); // 가을
    console.log( season[3] ); // 겨울
    console.log( season[4] ); // undefined : 존재하지 않는 인덱스여서
    // [ 생각해보기 ]
    // 변수 개수                : 1개(season)
    // 리터럴 개수              : 4개("봄" , "여름" , "가을" , "겨울")
    // 타입 개수                : 2개(문자열, 배열)
    // 변수가 갖는 자료 개수    : 1개( [ ] )
    // 변수 -> 배열 -> 문자열 4개
// 3. 배열 수정
    // 1) 배열 전체 수정 : 변수명 = [ 새로운 배열 ]
        season = [ "유재석" , "강호동" ];
        console.log( season );      // ['유재석', '강호동']
    // 2) 배열 내 특정한 요소 수정 : 변수명[인덱스] = 새로운 값
        season[1] = "신동엽";
        console.log( season );      // ['유재석', '신동엽']
// 4. 배열 내 요소 추가 : 변수명.push( 새로운 값 ), 맨 뒤에 추가된다.
    season.push( "서장훈" )         // season[2] : 서장훈
    console.log( season )           // ['유재석', '신동엽', '서장훈']
// 5. 배열 내 요소 삭제 : 변수명.splice( 인덱스, 개수 )
    season.splice( 0 , 1 )          // 0번 인덱스부터 1개 삭제
    console.log( season )           // ['신동엽', '서장훈']
// 6. 배열 내 특정 요소 찾기 : 변수명.indexof( 찾는 값 )
    // 찾는 값이 배열 내 존재하면, 인덱스 반환
    //                   존재하지 않으면, -1 반환
        console.log( season.indexOf( "유재석") );          // -1 반환
        console.log( season.indexOf( "신동엽") );          // 0 : 해당 인덱스 번호 반환
        let result = season.indexOf( "서장훈" );           // result에 "서장훈" 인덱스 번호 저장
        console.log( result );                             // 1 : 해당 인덱스 번호 반환

// 자료형 변환
// 강력한 자료형 체크 : C언어, 자바에서 변수를 선언할 때, 변수의 자료형을 미리 결정
// 느슨한 자료형 체크 : 자바스크립트에서 변수를 선언할 때, 변수의 자료형을 지정하지 않고 그 값에 따라 자동으로 결정
// -> 느슨한 자료형 체크가 편리할 수 있지만, 프로젝트를 진행할 경우 변수를 일관성 있게 유지해야하기 때문에
// -> 강력한 자료형 체크를 쓸 수 있는 'TypeScript'를 사용하기도 함.