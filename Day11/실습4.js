// [ 실습4 ]
// 문제 1: 삼각형 넓이 계산
// 밑변과 높이를 각각 prompt 함수로 입력받아, 삼각형의 넓이를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
// 삼각형 넓이 공식: 밑변 * 높이 / 2
let width = Number(prompt("밑변의 길이를 입력하세요."));
let height = Number(prompt("높이를 입력하세요."));
let extent = width * height / 2;

console.log(`${extent}`);

// 문제 2: 섭씨를 화씨로 변환
// 섭씨 온도를 prompt 함수로 입력받아, 화씨 온도로 변환하여 콘솔에 출력하는 프로그램을 작성하시오.
// 화씨 변환 공식: (섭씨 온도 * 9 / 5) + 32
let Celsius = Number(prompt("섭씨 온도를 입력하세요."));
let Fahrenheit = (Celsius * 9 / 5) + 32;

console.log(`${Fahrenheit}`);

// 문제 3: 나이 계산기
// 태어난 년도를 prompt 함수로 입력받아, 2025년 기준 현재 나이를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
// 나이 계산 공식: 2025 - 태어난 년도
let birthYear = Number(prompt("태어난 년도를 입력하세요."));
let age = 2025 - birthYear;

console.log(`${age}`);

// 문제 4: BMI 지수 계산
// 키(cm)와 몸무게(kg)를 각각 prompt 함수로 입력받아 BMI 지수를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
// BMI 지수 공식: 몸무게(kg) / (키(m) * 키(m))
// *힌트: 키는 cm 단위로 입력받지만, 공식에는 m 단위가 사용됩니다. 키(cm) / 100을 통해 단위를 변환해야 합니다.
let bmi1 = Number(prompt("키(cm)를 입력하세요."));
let bmi2 = Number(prompt("몸무게(kg)를 입력하세요."));
let bmi3 = bmi1 / 100;
let bmi4 = bmi2 / (bmi3 * bmi3);

console.log(`${bmi4}`);

// 문제 5: 관리자 확인
// 아이디와 이메일을 prompt 함수로 입력받습니다. 아이디가 'admin'이거나 또는 이메일이 'admin@test.com'이면 '관리자'를, 그렇지 않으면 '일반 사용자'를 콘솔에 출력하는 프로그램을 작성하시오.
let id = prompt("id를 입력하세요.")
let email = prompt("email을 입력하세요.")
let manager = id == "admin" || email == "admin@test.com" ? "관리자" : "일반 사용자";

console.log(`${manager}`);

// 문제 6: 학점 변환기 (HTML 출력)
// 100점 만점의 점수를 prompt 함수로 입력받아, 점수에 따라 아래와 같이 등급을 부여하고 
// HTML 문서에 <h2> 태그로 출력하는 프로그램을 작성하시오.
// 90점 이상: 'A'
// 80점 이상 90점 미만: 'B'
// 70점 미만: 'C'
let score = Number(prompt("점수를 입력하세요.(100점 만점)"));
let grade6 = score >= 90 ? "A" : score >= 80 && score < 90 ? "B" : "C";

document.querySelector( "h2" ).innerHTML = `${grade6}`;

// 문제 7: 청년 할인 이벤트 대상 확인
// 나이를 prompt로 입력받아, 
// 20대 (20세 이상 그리고 29세 이하)에 해당하는 경우 "이벤트 대상입니다."를, 그렇지 않으면 "이벤트 대상이 아닙니다."를 콘솔에 출력하는 프로그램을 작성하시오.
let age7 = Number(prompt("나이를 입력하세요."));
let event7 = age7 >= 20 && age7 <= 29 ? "이벤트 대상입니다." : "이벤트 대상이 아닙니다.";

console.log(`${event7}`);

// 문제 8: '좋아요' 카운터 만들기
// '좋아요' 수를 저장하는 likeCount 변수를 3으로 선언하고, 
// 증감 연산자(++)를 사용하여 변수의 값을 1 증가시킨 뒤, "좋아요: [숫자]" 형식으로 새로운 '좋아요' 수를 콘솔에 출력하는 코드를 작성하시오.
// let likeCount = 3;
let likeCount = 3;
likeCount++;

console.log(`좋아요: ${likeCount}`);

// 문제 9: 할 일 목록에 항목 추가하기
// 다음과 같이 할 일 목록이 담긴 todoList 배열이 있습니다. 
// prompt를 사용하여 새로운 할 일을 입력받아 배열의 마지막에 추가한 후, 변경된 배열 전체를 콘솔에 출력하는 프로그램을 작성하시오.
// 초기 배열: let todoList = ['장보기', '과제하기'];
// 힌트: 배열에 요소를 추가할 때는 .push() 메소드를 사용합니다.
let todoList = ['장보기', '과제하기'];
let todo = prompt("할 일을 입력하세요.");
todoList.push( todo );

console.log( todoList );

// 문제 10: 대기열의 마지막 사람 확인하기
// 다음과 같이 대기자 명단이 담긴 waitingList 배열이 있습니다. 
// 배열의 마지막에 있는 사람의 이름을 찾아 "마지막 대기자는 [이름]입니다." 형식으로 콘솔에 출력하는 프로그램을 작성하시오.
// 초기 배열: let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
// 힌트: 배열의 마지막 요소 인덱스는 배열.length - 1 입니다.
let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
let lastIndex = Number(waitingList.length - 1);
let lastWaiting = waitingList[lastIndex];

console.log(`마지막 대기자는 ${lastWaiting}입니다.`);