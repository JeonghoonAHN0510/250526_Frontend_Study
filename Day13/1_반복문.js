// [1] i(iterator) : 반복변수
for( let i = 1; i <= 3; i++){
    console.log( i );
}
/* for 순서도(알고리즘)
    1. let i = 1
    2. i <= 3                   true
    3. console.log( i );        console.log( 1 );
    4. i++                      i = 2;
    5. i <= 3                   true
    6. console.log( i );        console.log( 2 );
    7. i++                      i = 3;
    8. i <= 3                   true
    9. console.log( i );        console.log( 3 );
    10. i++                     i = 4;
    11. i <= 3                  false - for 반복문 종료
*/

// [2] for 중첩 : for{ } 안에 for{ } 포함
// 반복문 해석 서술해보기
for( let i = 1; i <= 2; i++){       // i는 1부터 2 이하까지 1씩 증가
    console.log( i );
    for( let j = 1; j <= 3; j++){   // j는 1부터 3 이하까지 1씩 증가
        console.log( j );
    }
}
// 출력 예상
// i = 1            true
// j = (1 2 3)      true
// j = 4            false
// i = 2            true
// j = (1 2 3)      true
// j = 4            false
// i = 3            false

// [3] 구구단 (for 중첩으로)
// [3-1] 단 : 2 ~ 9; 1씩 증가
for( let 단 = 2; 단 <= 9; 단++){
    console.log( 단 );
}
// [3-2] 곱 : 1 ~ 9; 1씩 증가
for( let 곱 = 1; 곱 <= 9; 곱++){
    console.log( 곱 );
}
// [3-3] 중첩하기
for( let 단 = 2; 단 <= 9; 단++){
    console.log(`${단} 단`)
    for( let 곱 = 1; 곱 <= 9; 곱++){
    console.log( `${단} X ${곱} = ${단 * 곱}` );
    }
}