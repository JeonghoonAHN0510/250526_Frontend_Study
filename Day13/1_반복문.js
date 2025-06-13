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

// [4] 별 찍기
/*
    *
    **
    ***
    ****
    *****
*/
let output = '';                // 빈 문자열 선언
for(let a = 1; a <=5; a++){
    for(let b = 1; b <= a; b++){
        output += "*";
    }
    output += "\n";
}
console.log(output);

// [5] 반복문 제어 키워드
// [5-1] continue;  : 가장 가까운 for{ }의 증감식으로 순서가 이동
    // 1부터 5까지 출력, 단) 3은 출력X
        for( let i = 1; i <= 5; i++){
            if( i == 3 ){ continue; }
            console.log( i );
        }
// [5-2] break;     : 가장 가까운 for{ }의 종료
    // 1부터 10까지 누적합계, 단) 누적합계가 10 초과면 종료
        let sum = 0;
        for( let i = 1; i <= 10; i++){
            sum += i;
            if( sum > 10 ){ break; }
        }
        console.log( sum );
// [5-3] 무한루프   : for( ; ; ){ }
// for( ; ; ){ console.log("무한출력") }
// [생각해보기] 1 ~ 45 사이의 6개의 정수를 입력받아 하나의 배열에 저장하시오.
// 조건 1 : 1 ~ 45 사이
// 조건 2 : 중복 값 제외
// 조건 3 : 총 6개만 저장
let numList = [];                                   // 입력받은 정수를 저장할 배열 선언
for( ; ; ){                                         // 무한루프를 이용하여 반복적으로 입력받기
    let num = Number(prompt("로또번호 입력 : "));   // 입력받은 값을 변수에 저장
    if( num < 1 || num > 46){                       // 입력받은 값이 1 ~ 45 사이가 아니면
        console.log("[경고] 1 ~ 45 사이만 입력하세요.");
        continue;                                   // 가장 가까운 for{ } 증감식으로 이동
    }
    if( numList.indexOf( num ) != -1 ){             // 입력받은 값이 중복된 값이라면
        console.log("[경고] 이미 입력한 수 입니다.");
        continue;                                   // 가장 가까운 for{ } 증감식으로 이동
    }
    numList.push( num );                            // 배열에 입력받은 값 저장
    if( numList.length == 6 ){                      // 배열에 저장된 값이 6개라면
        break;                                      // 가장 가까운 for{ } 종료
    }
}
console.log( numList );