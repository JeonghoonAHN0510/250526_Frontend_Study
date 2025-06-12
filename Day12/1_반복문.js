// [ 조건문 ] : 특정한 조건의 논리(true / false) 결과에 따라서 명령어를 처리한다.
// [ 반복문 ] : 특정한 조건의 논리 결과가 true일 떄 특정한 명령어를 반복 처리한다.

// [방법1] - 반복되는 코드를 복사/붙여넣기
// '안녕하세요' 문자열 5번 출력
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
// 1부터 5까지 출력
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// 반복되는 코드가 많아지면, 관리가 힘들고 복잡해진다.

/*
[방법2] - 반복문 사용하기
    1부터 5까지 출력
    반복되는 코드      : console.log( );
    반복되지 않는 코드 : 1 2 3 4 5 / 패턴 : 1부터 5까지 1씩 증가
    초기값 : 1
    조건문 : <= 5
    증감식 : ++
    for(초기값; 조건문; 증감식){ 반복되는 코드; } */
for(let i = 1; i <= 5; i++){
    console.log(i);
}
// 1부터 5까지 누적합계를 계산
    // 반복문없이 
let total = 0;
total = total + 1;
total = total + 2;
total = total + 3;
total = total + 4;
total = total + 5;
console.log(total);
// 반복되는 코드        : total = total + i ;
// 반복되지 않는 코드   : 1 2 3 4 5
    // 반복문으로 
let total1 = 0;
for (let j = 1; j <= 5; j++){
    total1 = total1 + j;
}
console.log(total1);
// 구구단 2단 출력
    // 반복문없이
console.log(` 2 X 1 = ${ 2 * 1 }`);
console.log(` 2 X 2 = ${ 2 * 2 }`);
console.log(` 2 X 3 = ${ 2 * 3 }`);
console.log(` 2 X 4 = ${ 2 * 4 }`);
console.log(` 2 X 5 = ${ 2 * 5 }`);
console.log(` 2 X 6 = ${ 2 * 6 }`);
console.log(` 2 X 7 = ${ 2 * 7 }`);
console.log(` 2 X 8 = ${ 2 * 8 }`);
console.log(` 2 X 9 = ${ 2 * 9 }`);
    // 반복문으로
for (let k = 1; k <= 9; k++){
    console.log(` 2 X ${k} = ${2 * k} `);
}
// 3개의 정수를 각각 입력받아서 배열에 저장
    // 반복문없이
let numList = [];
let num1 = prompt('정수1');
numList.push( num1 );

let num2 = prompt('정수2');
numList.push( num2 );

let num3 = prompt('정수3');
numList.push( num3 );
console.log( numList );
// 주의 : 배열에 입력받은 값을 push했을 때, num1, num2, num3의 변수는 필요한가? 
    // 반복문으로
let numList1 = [];
for (let num = 1; num <= 3; num++){
    let sum = prompt(`num${num}: `);
    numList1.push( sum );
}
console.log( numList1 );