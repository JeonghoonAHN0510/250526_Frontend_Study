/* 복습
[ 함수 ]
- 변수 : 하나의 자료를 저장
- 함수 : 코드 또는 명령어를 저장 
    1. 정의 : 특정한 { } 안에 미리 정의된 코드/명령어
    2. 목적
        (1) 코드 재사용
        (2) 매개변수에 따른 서로 다른 실행결과 도출
        (3) 매개변수/지역변수는 함수가 실행되면서 할당되고 종료되면서 자동으로 사라진다.
            -> 함수 *실행중에만* 변수가 사용된다.
    3. 사용법
        (1) 함수를 선언(정의)한다.
            function 함수명(매개변수){  }
        (2) 함수를 호출(사용)한다.
            함수명(변수)
    4. 주요 키워드(함수를 처음 정의할 때, 항상 잘 생각하기. 모르겠으면, 글로 작성하기.)
        (1) 매개변수        : 함수 호출시 함수 안으로 들어가는 자료/값을 저장하는 변수, 여러개 가능
        (2) 실행문{ }       : 함수 호출시 처리되는 코드/명령어
        (3) 반환값(return)  : 함수 종료시 하촐한 곳으로 반환(리턴)되는 값, 자료 1개만 반환가능
    5. 사용하는 방법
        (1) JS파일에서 호출
            함수명(변수);                           : 정해진 매개변수에 따라 리턴값
            let 결과값 = 함수명(변수);              : 결과값을 다음에 사용하게 된다면 값에 저장
        (2) HTML파일에서 호출
            <마크업 이벤트속성명="함수명(변수)">    : HTML에서 이벤트가 발생하면 -> 정해진 함수가 실행
*/

/* 
[ DOM 객체 ]
- 객체란? 속성과 함수를 하나로 묶은 자료
    - 변수명.속성명     : 객체 내 속성값 호출
    - 변수명.함수명()   : 객체 내 함수 호출
        console.log()       -> console 객체 내 log 함수 호출
        document.write()    -> document 객체 내 write 함수 호출
- DOM 객체란? (미리 만들어진) JS에 내장된 객체
    1. 정의 : Document Object Model -> HTML을 객체로 다루기 위한 객체
    2. 주요 속성
        (1) document.write('출력할 내용')       : HTML에 문자열을 출력하는 함수
        (2) document.querySelector('선택자')    : HTML에 지정한 선택자를 JS객체로 *변환*하는 함수
        (3) document.querySelectorAll('선택자') : HTML에 지정한 선택자를 모두 JS객체로 *변환*하는 함수
            *선택자
                1. 마크업명
                2. .클래스명
                3. #id명
        (4) DOM객체.innerHTML                   : 마크업 내 html 내용물을 호출하는 속성
                <마크업> 여기!! </마크업>
                inner 없음 : input, img ...
        (5) DOM객체.value
                <마크업 value="여기!!"/>
                value 있음 : input, select, textarea ...
                value 없음 : div, span, table ...

*/
// [1]
console.log( document );    // document -> HTML 마크업 전체(body?)
// [2] document.write('출력할 내용')
document.write('내장객체 함수실행');
// [3] document.querySelector('선택자')
const div = document.querySelector('div');          // div 1개만 변환
console.log( div );
const box2 = document.querySelector('.box2');
console.log( box2 );
const box3 = document.querySelector('#box3');
console.log( box3 );
// [4] document.querySelectorAll('선택자')
const divArray = document.querySelectorAll('div');  // 모든 div 변환 -> 함수의 변환값은 1개이기 때문에
                                                    //                  다수인 div가 배열 1개로 반환됨
console.log( divArray );
// [5] DOM객체.innerHTML
const div2 = document.querySelector('div');         // div를 JS객체로 변환
const html = div2.innerHTML;                        // div2 내의 내용물 반환
console.log( html );                                // div2 내용물인 '박스1' 출력
// [6] 함수 만들기
    // 함수 실행 조건 : [함수1실행] 버튼을 클릭했을 때 -> func1()을 실행
function func1(){       // 함수 선언
    // 1. 콘솔 출력 테스트
    console.log('----func1 exe----');
    // 2. input 마크업을 JS객체로 변환하기
    const myInput = document.querySelector('.myInput');
        console.log( myInput );
    // 3. 가져온 JS객체 내 value 속성값 가져오기 -> input 마크업에 입력된 값을 가져오기
    const text = myInput.value;
        console.log( text );
}
// [7] 함수 만들기
function func2(){
    // 1. 콘솔 출력 테스트
    console.log('----func2 exe----');
    document.querySelector('.title').innerHTML = 'JS에서 작성한 것'
}