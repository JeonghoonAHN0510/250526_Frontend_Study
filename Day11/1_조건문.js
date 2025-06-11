/*
[ 조건문 ]
- 특정 '조건'에 따라 명령을 순서대로 처리
- 형태
    if ( 조건 ) {true 코드}
        else {false 코드}
    if ( 조건1 ) {true 코드}
        else if ( 조건2 ) {true2 코드}
        else if ( 조건3 ) {true3 코드}
            else {false 코드}
*/

// [1] if (조건) {true 코드}
if ( 10 > 3 ) console.log("[1] 10은 3보다 크다.");      // true -> 출력 o
if ( 10 > 20 ) console.log("[1] 10은 20보다 크다.");    // false -> 출력 x
// 주의할 점 : ;(세미콜론)은 한 문단을 마치는 기호.

// [2] 명령어 코드가 2개 이상일 때는 { }로 묶자
if ( 10 > 2 ) {
    console.log("[2] 10 > 2");                         // true -> 출력 o
    console.log("[2] 10 > 2");                         // true -> 출력 o
}

// [3] if ~ else
if ( 10 > 3 ) {
    console.log("[3] 10은 3보다 크다.");                // true -> 출력 o
} else {
    console.log("[3] 10은 3보다 작다.");                // false -> 출력 x
}

// [4] if ~ else if ~ else if ~ else
if ( 10 > 20 ) {
    console.log("[4] 10은 20보다 크다.");               // false -> 출력 x
} else if ( 10 > 15 ) {
    console.log("[4] 10은 15보다 크다.");               // false -> 출력 x
} else if ( 10 > 10 ) {
    console.log("[4] 10은 10보다 크다.");               // false -> 출력 x
} else {
    console.log("[4] 10은 10보다 작거나 같다.");        // true -> 출력 o
}

// [5] 중첩
let 성별 = "남";
let 점수 = 80;
if ( 성별 == "남" ) {
    if( 점수 >= 90 ){
        console.log("남자우수");
    } else {
        console.log("남자");
    }
} else {
    if( 점수 >= 90 ){
        console.log("여자우수");
    } else {
        console.log("여자");
    }
}