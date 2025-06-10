//[ 연산자 ] : 특정한 동작을 하도록 지시하는 기호
// 1. 산술 연산자 : 하나의 연산 결과를 (숫자)로 반환
//        +  -  *  /  %
console.log( 10 + 3 );  // 13
console.log( 10 - 3 );  // 7
console.log( 10 * 3 );  // 30
console.log( 10 / 3 );  // 3.333333333333
console.log( parseInt(10 / 3) );  // 3(parseInt로 몫만 반환)
console.log( 10 % 3 );  // 1

// 2. 연결 연산자 : 연산에 문자열이 포함되면, 더하기가 아니라 연결이 된다.
console.log( "점수 : " + 10 );  // 점수 : 10, 연결


// [ 생각해보기 ]
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
let korean = prompt("국어 점수를 입력하세요.");
let english = prompt("영어 점수를 입력하세요.");
let math = prompt("수학 점수를 입력하세요.");

let totalScore = Number(korean) + Number(english) + Number(math);
let everage = parseFloat(Number(totalScore) / 3);

console.log( `총점 : ${totalScore}` );
console.log( `평균 : ${everage}` );
// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let radius = prompt("반지름을 입력하세요.");

let extent = parseFloat(Number(radius) * Number(radius) * 3.14);

console.log( `원넓이 : ${extent}` );
// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let float1 = Number(prompt("실수1을 입력하세요."));
let float2 = Number(prompt("실수2을 입력하세요."));

let ratio = (float1 / float2) * 100;

console.log( `비율 : ${ratio}%` );

// 3. 비교 연산자 : 하나의 연산 결과를 (논리)값으로 반환
/*
    >   : 초과
    <   : 미만
    >=  : 크거나 같다( => 같거나 크다[X] )
    <=  : 작거나 같다
    ==  : (값이)같다        / === : (값과 자료형이)같다.            / "10" == 10 : true / "10" === 10 : false
    !=  : (값이)같지 않다   / !== : (값과 자료형이)같지 않다.
    - 범위 논리는 지원 x ( 5 < 점수 < 10 [X] ) --> 5 < 점수 && 점수 < 10
*/


// 4. 논리 연산자 : 하나의 연산 결과를 (논리)값으로 반환
/*
    &&  : and 조건
    ||  : or 조건
    !   : not 조건
*/



// [ 생각해보기 ]
// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let int1 = Number(prompt("정수를 입력하세요."));

let result1 = int1 % 2 == 1;
console.log( `결과 : ${ result1 }` );
// console.log(Boolean(int1 % 2 == 1));

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let int2 = prompt("정수를 입력하세요.");
let result2 = int2 % 7 == 0;

console.log( `결과 : ${result2}` );
// console.log(Boolean(int2 % 7 == 0));

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let id = prompt("id를 입력하세요.");
let password = prompt("비밀번호를 입력하세요.");
let result3 = id == 'admin' && password == '1234';

console.log( `결과 : ${result3}` );
// console.log(Boolean(id1 == 'admin' && password1 == '1234'));

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let int3 = prompt("정수를 입력하세요.");
let result4 = int3 % 2 == 1 && int3 % 7 == 0;

console.log( `결과 : ${result4}` );
// console.log(Boolean(int3 % 2 == 1 && int3 % 7 == 0));


// 5. 할당 연산자( (복합)대입 연산자 ) : 변수에 저장할 때 사용되는 기호
/*
    =   : 오른쪽 데이터를 왼쪽에 대입                   / ' = ' vs ' == '
    +=  : 오른쪽 데이터를 왼쪽에 더한 후에 대입         / ( A += 3 ) == ( A = A + 3 )
    -=  : ( A -= 3 ) == ( A = A - 3 )
    *=  : ( A *= 3 ) == ( A = A * 3 )
    /=  : ( A /= 3 ) == ( A = A / 3 )
    %=  : ( A %= 3 ) == ( A = A % 3 )
*/
let 변수 = 10;
변수 += 3;          // 변수 = 변수 + 3;
console.log( 변수 ) // 13
변수 -= 4;          // 변수 = 변수 - 4;
console.log( 변수 ) // 9
변수 *= 2;          // 변수 = 변수 * 2;
console.log( 변수 ) // 18

// 6. 증감 연산자 : 변수명 앞뒤로 붙을 수 있음
/*
    ++  : 1씩 증가
    --  : 1씩 감소
    ++변수명 : 선위 증가, 변수명++ : 후위 증가
    --변수명 : 선위 감소, 변수명-- : 후위 감소
    세미콜론 단위 안에서 우선순위를 따짐.
*/
let 나이 = 40;
console.log( ++나이 );  // ++40 ->  41[O]
console.log( 나이++ );  // 41++ ->  41[O], 42[X]
console.log( 나이 );    //          42[O]

// 7. 삼항 연산자 : 항이 3개인 연산자 ( 프론트엔드에서 매우 중요 )   /   true 와 false 대신 다른 값으로 대체하기 위해서
//  (단일 조건) - 조건 ? 참 : 거짓
//  (중첩 조건) - 조건1 ? 참1 : 조건2 ? 참2 : 조건3 ? 참3 : 거짓
let 점수 = 80;
// 만약에 점수가 80점 이상이면 '합격' 아니면 '불합격
let 결과 = 점수 >= 80 ? "합격" : "불합격";      // true -> '합격' / false -> '불합격'

console.log( `결과 : ${결과}` )

// [ 생각해보기 ]
// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let score1 = Number(prompt("1차 점수를 입력하세요."));
let score2 = Number(prompt("2차 점수를 입력하세요."));
// 점수는 항상 Number()로 받자!!!!

let totalScore1 = score1 + score2;
let 합격여부 = totalScore1 >= 150 ? "합격" : "불합격";

document.write( `<h3> ${합격여부} </h3>` );

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let person1 = prompt("이름을 입력하세요.");
let person2 = prompt("이름을 입력하세요.");

let 방장1 = person1 == "유재석" ? `${person1}(방장)` : `${person1}`;
let 방장2 = person2 == "유재석" ? `${person2}(방장)` : `${person2}`;

document.write( ` <ol> <li>${방장1}</li> <li>${방장2}</li> </ol> ` )