/*
[ for 반복문 ]
    1. 형태 : for (초기값; 조건문; 증감식){
            실행문;}
    2. 문법
        1) 초기값 : 반복할 때 반복의 횟수를 체크하는 변수의 처음값
        2) 조건문 : 반복 실행문이 실행되는 조건으로 true면 { } 실행, 아니면 종료
        3) 증감식 : 반복 변수의 증감 변화 연산식, ++ --
        4) 실행문 : 조건이 true일 때, 반복 실행되는 코드
    3. 순서
    초기값 -> 조건문(true) -> 실행문 -> {증감식 -> 조건문(true) -> 실행문} -> 증감식 -> 조건문(false) -> 반복 종료
    4. 배열과 반복문 관계
        1) 배열의 인덱스는 순차적인 순서 번호가 존재한다.(인덱스란? 자료가 저장된 순서번호, 0부터 시작)
        2) 배열의 길이(자료 길이)       : 변수명.length
        3) 배열의 마지막 인덱스 번호    : 변수명.length - 1
*/

// [1] 배열의 데이터를 하나씩 조회
let 과일상자 = [ '사과', '포도', '딸기' ]; // 자료 개수 : 3, 인덱스 : 0 1 2
// 반복문없이
console.log( 과일상자[0] );
console.log( 과일상자[1] );
console.log( 과일상자[2] );
// 반복문으로 1
for (let index = 0; index <= 2; index++){
    console.log( 과일상자[index] );
}
// 반복문으로 2
for (let index = 0; index <= 과일상자.length - 1; index++){
    console.log( 과일상자[index] );
}

// [2] 3개의 입력받은 데이터들을 하나의 배열에 추가/저장
// 반복문없이
// let dataList = [];
// let data1 = prompt("data1 : ");
// dataList.push( dataList ); 

let dataList = [];
for (let count = 1; count <= 3; count++){
    let data2 = prompt("data2: ")
        dataList.push(data2)
}
console.log( dataList );

// [생각해보기]
// 1. dataList의 모든 자료들을 <ul> 마크업의 요소 하나씩 <li> 마크업에 출력하세요.
// 반복문없이
// let html = `<ul>
//                 <li> ${ dataList[0] } </li>
//                 <li> ${ dataList[1] } </li>
//                 <li> ${ dataList[2] } </li>
//             </ul>`
// document.write( html );
// 반복문으로
let html = `<ul>`;
for (let index1 = 0; index1 <= dataList.length - 1; index1++){
    html += `<li> ${ dataList[ index1 ] } </li>`;
}
html += `</ul>`;
document.write( html );
/*
    let 변수A = "안녕";
    (변수A = 변수A + "하세요";) = (변수A += "하세요";)      -> "안녕하세요"
    변수A = "하세요";                                      -> "하세요"
*/
