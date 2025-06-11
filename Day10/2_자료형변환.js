// [ 자동 형 변환 ]
    // 1) 문자열 숫자에 * 1을 하면 문자열 숫자가 숫자형 숫자로 변환된다. ( "10" vs 10 )
let input = prompt("숫자를 입력하세요.");    // 5 , prompt함수는 항상 문자열만 반환한다.
                                            // let input = "5"
console.log( typeof input );                // String

let result = input * 10;                    // "5" * 10
console.log( typeof result );               // number
    // 2) 문자열 + 숫자형을 하면, 자동으로 문자열로 변환된다. +(연결 연산자)
let one = "20";             // String
let two = 10;               // number
console.log( one + two );   // "20" + 10 -> "2010" / 30[X]
    // 주의할 점
let time = prompt("사용시간(분)을 입력하세요.");    // 8
console.log( time * 1000 );                         // 8000
console.log( time + 1000 );                         // 81000 / 1008[X]

// [ 자료형 변환 함수 ]
    // 1) Number("문자열")          : 숫자형 변환 함수
        console.log( Number("10") );            // "10" -> 10
        console.log( Number("10ABC") );         // "10ABC" -> 변환 불가능(Not a Number)
    // 2) parseInt( "문자열" )      : 정수 변환 함수
        console.log( parseInt("123") );         // 123
        console.log( parseInt("123.45") );      // 123, 소수점 잘림
        console.log( parseInt("123ABC") );      // 123, 문자 잘림
    // 3) parseFloat( "문자열" )    : 실수 변환 함수
        console.log( parseFloat("123.45") );    // 123.45
    // 4) String( 숫자 )            : 문자열 변환 함수
        console.log( String(123) );             // '123'

// [ 생각해보기 ]
// 처리할 사건의 처리 과정(프로세스)을 생각하자.
// 입력 -> 저장 -> 연산 -> 출력

// 문제1) 국어 점수와 수학 점수를 prompt로 입력받아 더한 결과를 console.log 출력하시오.
let korean = prompt("국어 점수를 입력하세요.");
// let korean = Number(prompt("국어 점수를 입력하세요."));
let math = prompt("수학 점수를 입력하세요.");
// let math = Number(prompt("수학 점수를 입력하세요."));

let totalScore = Number(korean) + Number(math);
console.log( "총 합계 : " + totalScore );
console.log( `총 합계 : ${ totalScore }` );             // `` 백틱 사용하기!!!!
// 예) 총 합계 : 150

// 문제2) 이름과 나이(숫자)를 prompt로 입력받아 document.write를 이용하여 <h3> 마크업으로 출력하시오.
let name = prompt("이름을 입력하세요.");
let year = Number(prompt("나이를 입력하세요."));

document.write( `<h3> ${name}(${year}) </h3>` )
// 예) <h3> 강호동(45) </h3>