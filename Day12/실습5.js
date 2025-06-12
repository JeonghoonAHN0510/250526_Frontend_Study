// [ 실습5 ]

// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = [ '사과', '바나나' ];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요.
// 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.
// 배열찾기함수 : .indexOf()
let fruitList = [ '사과', '바나나' ];

let fruitName = prompt("[문제1] 과일 이름 : ");

if ( fruitList.indexOf(fruitName) != -1 ){
    console.log("이미 존재하는 과일입니다.")
} else {
    fruitList.push(fruitName);
    console.log(fruitList);
}

// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.
let privateNumber = prompt("[문제2] 주민등록번호 13자리 : ");

// privateNumber[6] == privateNumber.charAt(6)
// if ( privateNumber[6] == '1' || privateNumber[6] == '3' ){
//     console.log('blue');
// } else if ( privateNumber[6] == '2' || privateNumber[6] == '4' ) {
//     console.log('red');
// } else {
//     console.log('잘못된 주민등록번호입니다.');
// }

if ( privateNumber.charAt(6) == 1 || privateNumber.charAt(6) == 3 ) {
    console.log('blue');
} else if ( privateNumber.charAt(6) == 2 || privateNumber.charAt(6) == 4 ) {
    console.log('red');
} else {
    console.log('잘못된 주민등록번호입니다.');
}


// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10% 할인
// 30,000원 이상 50,000원 미만: 5% 할인
// 10,000원 이상 30,000원 미만: 1% 할인
// 10,000원 미만: 할인 없음
let purchasePrice = Number(prompt("[문제3] 총 구매 금액 : "));
let finalPrice;

if ( purchasePrice >= 50000 ){
    finalPrice = purchasePrice * 0.9;
    console.log( `최종 결제 금액 : ${finalPrice}` );
} else if ( purchasePrice >= 30000 ) {
    finalPrice = purchasePrice * 0.95;
    console.log( `최종 결제 금액 : ${finalPrice}` );
} else if ( purchasePrice >= 10000 ) {
    finalPrice = purchasePrice * 0.99;
    console.log( `최종 결제 금액 : ${finalPrice}` );
} else {
    console.log( `최종 결제 금액 : ${purchasePrice}` );
}


// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
let month = Number(prompt("[문제4] 월 : "))

if ( month == 3 || month == 4 || month == 5 ) {
    console.log('봄');
} else if ( month == 6 || month == 7 || month == 8 ) {
    console.log('여름');
} else if ( month == 9 || month == 10 || month == 11 ) {
    console.log('가을');
} else if ( month == 12 || month == 1 || month == 2 ) {
    console.log('겨울');
} else {
    console.log('잘못된 월입니다.')
}



// 문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.
let num1 = Number(prompt("[문제5] 숫자 1 : "));
let num2 = Number(prompt("[문제5] 숫자 2 : "));
let num3 = Number(prompt("[문제5] 숫자 3 : "));

if ( num1 > num2 && num1 > num3 ){
    console.log( `가장 큰 수 : ${num1}` );
} else if ( num2 > num1 && num2 > num3 ){
    console.log( `가장 큰 수 : ${num2}` );
} else if ( num3 > num1 && num3 > num2 ){
    console.log( `가장 큰 수 : ${num3}` );
} else {
    console.log('서로 다른 정수로 다시 입력하세요.')
}


// -------------------------------------------------------------------------------------------------

// 문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'
let year = Number(prompt("[문제6] 연도 : "));

if ( year % 4 == 0 && year % 100 != 0 ){
    console.log(`${year}년은 윤년입니다.`);
} else {
    console.log(`${year}년은 평년입니다.`);
}

// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력
// 방법 1) 변수 3개
let num4 = Number(prompt("[문제7] 숫자 1 : "));
let num5 = Number(prompt("[문제7] 숫자 2 : "));
let num6 = Number(prompt("[문제7] 숫자 3 : "));

if ( num4 > num5 && num4 > num6 ){
    if ( num5 > num6 ){
        console.log(`${num6} ${num5} ${num4}`);
    } else {
        console.log(`${num5} ${num6} ${num4}`);
    }
} else if ( num5 > num4 && num5 > num6 ){
    if ( num4 > num6 ){
        console.log(`${num6} ${num4} ${num5}`);
    } else {
        console.log(`${num4} ${num6} ${num5}`);
    }
} else if ( num6 > num4 && num6 > num5 ){
    if ( num4 > num5 ){
        console.log(`${num5} ${num4} ${num6}`);
    } else {
        console.log(`${num4} ${num5} ${num6}`);
    }
} else {
    console.log('서로 다른 정수로 다시 입력하세요.')
}
// 방법 2) 배열 1개 (배열로 사용하는게 수가 많아졌을 때 효과적)
// 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법, 한 위치에 하나의 자료만 저장할 수 있음.
/*
    A = 10;     B = 20;
        A = B;      B의 자료를 A에 대입 -> A의 기존 자료는 사라진다.
    A = 20;     B = 20;    문제 발생 !!!!!
    *해결방안 : 임시 변수를 만들어서 임시 보관
    A = 10;     B = 20;     TEMP;
        TEMP = A;       TEMP = 10; A = 10; B = 20;
        A = B;          TEMP = 10; A = 20; B = 20;
        B = TEMP;       TEMP = 10; A = 20; B = 10;
    A = 20;     B = 10;
*/
// let numArray = [ num4, num5, num6 ];
// let temp;
// if ( numArray[0] > numArray[1] ){
//     temp = numArray[0];
//     numArray[0] = numArray[1];
//     numArray[1] = temp;
// }
// if ( numArray[0] > numArray[2] ){
//     temp = numArray[0];
//     numArray[0] = numArray[2];
//     numArray[2] = temp;
// }
// if ( numArray[1] > numArray[2] ){
//     temp = numArray[1];
//     numArray[1] = numArray[2];
//     numArray[2] = temp;
// }
// console.log( numArray );


// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.
// 출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
let player1 = Number(prompt("[문제8] 0(가위), 1(바위), 2(보) 중 선택하세요."))
let player2 = Number(prompt("[문제8] 0(가위), 1(바위), 2(보) 중 선택하세요."))
// let game = ['가위', '바위', '보']
// 1) 방법 1
if ( (player1 == 0 && player2 == 2) || (player1 == 1 && player2 == 0) || (player1 == 2 && player2 == 1) ){
    console.log('플레이어1 승리');
} else if ( (player2 == 0 && player1 == 2) || (player2 == 1 && player1 == 0) || (player2 == 2 && player1 == 1) ){
    console.log('플레이어2 승리');
} else if ( player2 == player1 ){
    console.log('무승부');
} else {
    console.log('잘못된 입력입니다. 다시 입력하세요.')
}
/* 2) 방법 2 ( 패턴 찾기 )
        1. 두 수가 같으면 무승부이다.
        2. 플레이어1 승리 : player1 == (player2 + 1) % 3;
        3. 플레이어2 승리 : else
*/
// 문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
// 주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
// 사용자로부터 차량 번호를 입력받아, 
// carArray에서 해당 차량을 찾은 뒤 
// locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 
// 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.
let carArray = [ '250어7142', '142가7415', '888호8888' ];
let locationArray = [ 'A1', 'B3', 'C2' ];

let carNumber = prompt("[문제9] 차량 번호 : ")

if ( carArray.indexOf(carNumber) == -1 ){
    console.log('차량이 존재하지 않습니다.')
} else {
    console.log(`${carNumber}의 위치는 ${locationArray[carArray.indexOf(carNumber)]}입니다.`)
}

// 문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요.
// 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.
// 배열 내 요소 삭제 : 변수명.splice( 인덱스, 개수 )
let courseList = ['수학', '영어', '과학', '국어'];

let exc = prompt("[문제10] 제외하고 싶은 과목명");

if ( courseList.indexOf(exc) == -1 ){
    console.log('해당 과목은 신청 목록에 없습니다.')
} else {
    if ( exc == '수학' ){
        courseList.splice( 0 , 1 );
        console.log( courseList );
    } else if ( exc == '영어' ) {
        courseList.splice( 1 , 1 );
        console.log( courseList );
    } else if ( exc == '과학' ) {
        courseList.splice( 2 , 1 );
        console.log( courseList );
    } else {
        courseList.splice( 3 , 1 );
        console.log( courseList );
    }
}