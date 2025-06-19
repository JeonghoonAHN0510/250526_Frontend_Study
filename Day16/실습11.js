// [ 실습11 ]
// 실습 1: 성인 인증 함수
// 나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.
console.log('[문제1]');
function isAdult( age ){            // 함수 선언
    if ( age >= 20 ){               // 20세 이상이면
        return true;                // true 리턴
      //console.log('true');        // true 콘솔에 출력
    }else{                          // 20세 이상이 아니라면(= 20세 미만이면)
        return false;               // false 리턴
      //console.log('false');       // false 콘솔에 출력
    }
}
let age1 = isAdult(25);             // 리턴값 age1에 대입
let age2 = isAdult(17);             // 리턴값 age2에 대입
console.log( age1 );
console.log( age2 );

// 실습 2: 배열의 총합 구하기
// 숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.
console.log('[문제2]');
const numbers = [10, 20, 30, 40, 50];
let sum = 0;                                        // 합계 선언
function sumArray( Array ){                         // 함수 선언
    for (let i = 0; i <= Array.length - 1; i++){
        sum += Array[i];                            // 각각의 요소 합계에 추가
    }
    return sum;                                     // 합계 리턴
}
sumArray( numbers );
console.log( sum );

// 실습 3: 가장 긴 단어 찾기
// 문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
console.log('[문제3]');
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord( Array ){                  // 함수 선언
    let word = '';                                  // 비교할 기준 단어 선언
    for ( let i = 0; i <= Array.length - 1; i++){
        let wordLengthI = Array[i].length;          // i번째 값의 길이
        if ( word.length > wordLengthI ){           // 비교할 단어와 배열속 단어 비교
            word = word;                            // 더 큰 단어 비교할 기준 단어에 대입
        }else {
            word = Array[i];
        }
    }
    return word;                                    // 최종적으로 남은 긴 단어 리턴
}
let a = findLongestWord( words );
console.log( a );

// 실습 4: 게임 점수 관리하기
// let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
// gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.
console.log('[문제4]');
let userScore = 0;
function gainScore(){                               // 함수 선언
    userScore += 10;                                // 함수가 실행되면 userScore 10 증가
}
function loseScore(){                               // 함수 선언
    userScore -= 5;                                 // 함수가 실행되면 userScore 5 감소
}
gainScore();
gainScore();
gainScore();
loseScore();
console.log( userScore );

// 실습 5: 최고 점수 학생 찾기
// 전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
console.log('[문제5]');
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];
function findTopStudent( Array ){                   // 전역변수로 배열이 선언되어서, 매개변수로 배열을 안 넣어도 될 듯?
    let maxScore = 0;                               // 비교할 기준 점수 선언
    let maxStudent;                                 // 가장 높은 점수를 가진 학생 이름 선언
    for ( let i = 0; i <= Array.length - 1; i++){
        let ArrayName = Array[i].name;
        let ArrayScore = Array[i].score;
        if ( maxScore > ArrayScore ){               // 기준 점수가 배열 점수보다 크다면
            maxScore = maxScore;                    // 유지
        }else{                                      // 배열 점수가 기준 점수보다 크다면
            maxScore = ArrayScore;                  // 배열 점수를 기준 점수에 대입
            maxStudent = ArrayName;                 // 배열 점수가 가장 크다면 학생 이름을 maxStudent에 대입 
                                                    // -> 왜? 배열 점수가 기준 점수보다 더 크다는 것은 지금까지의 가장 높은 점수를 가진 학생이기에
        }
    }
    return maxStudent;
}
let b = findTopStudent( students );
console.log( b );

// 실습 6: 상품 목록 페이지 만들기 (참고: 예제 6, 7, 8, 12)
// 전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
// 각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
let html6 = `<h3>[문제6]</h3>`;
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];
function renderProducts( Array ){                       // 함수 선언
    for ( let i = 0; i <= Array.length - 1; i++){
        let product = Array[i];
        html6 += `<div>
                    <h4>${product.name}</h4>
                    <p>가격 : ${product.price}</p>        
                    <p>재고 : ${product.stock}</p>        
                  </div>`;                              // 조건에 맞게 html 구성 및 대입
    }
    document.write( html6 );
}
renderProducts( products );


// 실습 7: 간단한 계산기
// num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
// operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)
console.log('[문제7]');
function calculator ( num1, num2, operator ){           // 함수 선언
    if ( operator == '+'){                              // operator가 '+'라면
        console.log ( num1 + num2 );                    // 두 수의 합을 콘솔에 출력
    }else if ( operator == '-'){                        // operator가 '-'라면
        if ( num1 > num2 ){                             // num1이 더 크면
            console.log ( num1 - num2 );                // num1 - num2
        }else {                                         // num2가 더 크면
            console.log ( num2 - num1 );                // num2 - num1
        }
    }else {                                             // operator가 '+' '-' 둘 다 아니라면
        console.log('잘못된 입력입니다.')               // 경고 문구 출력
    }
}
calculator( 5, 2, '+' )
calculator( 5, 2, '-' )
calculator( 5, 2, '*' )

// 실습 8: HTML 리스트(ul, li) 동적 생성
// todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
// renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
// 최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let html8 = `<h3>[실습8]</h3>`;
let todoList = ['장보기', '운동하기']
function renderList( Array ){                       // 함수 선언
    html8 += `<ul>`;
    for (let i = 0; i <= Array.length - 1; i++){    // 배열 순회
        html8 += `<li>${Array[i]}</li>`;            // 배열 i번째 할 일 조건에 맞게 추가
    }
    html8 += `</ul>`;
    document.write( html8 );
}
renderList( todoList );

// 실습 9: 입장료 계산 함수
// 임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
// 8세 미만: "무료"
// 8세 이상 19세 이하: "5,000원"
// 20세 이상: "10,000원"
// 계산된 가격 문자열을 반환(return)하시오.
console.log('[문제9]');
function getTicketPrice( age ){             // 함수 선언
    if ( age < 8 ){                         // 8세 미만이면
        return '무료';                      // 무료 리턴
    } else if ( age >= 8 && age <= 19){     // 8세 이상 19세 이하면
        return '5,000원'                    // 5,000원 리턴
    } else{                                 // 20세 이상이면
        return '10,000원'                   // 10,000원 리턴
    }
}
let ticketPrice1 = getTicketPrice( 5 );     // 리턴값을 ticketPrice에 대입
let ticketPrice2 = getTicketPrice( 15 );    // 리턴값을 ticketPrice에 대입
let ticketPrice3 = getTicketPrice( 25 );    // 리턴값을 ticketPrice에 대입
console.log( ticketPrice1 );                 // ticketPrice 콘솔에 출력
console.log( ticketPrice2 );                 // ticketPrice 콘솔에 출력
console.log( ticketPrice3 );                 // ticketPrice 콘솔에 출력