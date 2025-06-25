/*
[ interval ] : 간격
    1. 정의 : 시간적인 간격에 따라 특정 함수 실행
    2. 사용법
        (1) setInterval( 함수명, 밀리초 )
            - 함수명 : 함수명만 작성, () 생략
            - 밀리초 : 1/1000sec -> 1000 : 1sec, 10000 : 10sec
            - 반환값 : 함수 실행 후 반환되는 결과
                -> let 변수 = setInterval( ); 
        (2) clearInterval( interval객체 );
            - 중지할 interval객체를 대입하여 해당 interval을 중지하는 함수
*/

// [예제1]
let value = 0;          // 전역변수
function 증가함수(){    // value 1 증가 함수
    // 1. 전역변수 1 증가
    value++;
    // 2. 특정한 위치에 전역변수 값 대입
        // 어디에 : id = "box1"에
    const box1 = document.querySelector('#box1');
        // 무엇을 : value값을
    let html = value;
        // 대입
    box1.innerHTML = html;
};
//==============================1초 간격으로 '증가함수' 재실행==============================
setInterval( 증가함수, 1000 ); // 1초 간격으로 '증가함수' 실행

// [예제2]
function 시계함수(){
    // 1. 현재 날짜/시간 구하기 : new Date() 객체 사용
    let today = new Date();
    let hour = today.getHours();        // 시 반환
    let minute = today.getMinutes();    // 분 반환
    let second = today.getSeconds();    // 초 반환
    // 2. 시 분 초 출력하기
        // 어디에 : id = "box2"에
    const box2 = document.querySelector('#box2');
        // 무엇을 : 시 분 초를
    let html = `${hour} : ${minute} : ${second}`;   // 백틱주의!!!!
        // 대입
    box2.innerHTML = html;
};
//==============================1초 간격으로 '시계함수' 실행==============================
setInterval( 시계함수, 1000 ); // 1초 간격으로 '시계함수' 실행

// [예제3]
let time = 0;   // 현재 타이머의 초
let timerId;    // 타이머 변수 선언, 추후에 interval 객체 저장
// 1) 시간 증가 함수
function 시간증가(){
    time++;     // 1 증가
    document.querySelector('#box3').innerHTML = time;
};
// 2) 타이머 시작 함수
function 타이머시작(){
    // 전역변수에 interval 객체 저장 -> 전역변수 사용이유 : 서로 다른 함수에서 같은 변수를 사용하기 위해서
    timerId = setInterval( 시간증가, 1000 );  // 1초마다 '시간증가' 함수 실행
};
// 3) 타이머 중지 함수
function 타이머중지(){
    clearInterval( timerId );
};