/*
- HTML, CSS와 달리 JS는 프로그래밍언어
- 명령이나 연산을 기계와 소통하는 언어
*/

10                                  // 10 이라는 리터럴 값이면서 숫자 자료형
3.14                                // 3.14 라는 리터럴 값이면서 숫자 자료형
"안녕하세요"                        // 안녕하세요 라는 리터럴 값이면서 문자열 자료형
true                                // true 라는 리터럴 값이면서 논리 자료형
[ 10, 3.14, "안녕하세요", true ]    // [ ] 안에 여러개 리터럴 값을 포함하는 배열 자료형

// [ 출력 함수 ]
// 1. console.log( 출력할 자료 )                            : F12 - console에 출력된다.
console.log( 10 )
console.log( " 안녕하세요" )

// 2. alert( 출력할 자료 )                                  : 브라우저 알림 창으로 출력된다.
alert( 3.14 )
alert( true )

// 3. document.write( HTML )                                : HTML 문서에 출력한다.
document.write( "<h3> JS에서 작성한 HTML입니다. </h3>" )

// 4. document.querySelector("선택자").innerHTML = HTML     : 특정한 선택자(마크업, class, id)를 출력한다.
document.querySelector( "h3" ).innerHTML = "<h3> 특정한 선택자 HTML 작성합니다. </h3>"