/* [ 복습 ]
[ DOM객체 ]
    1. 정의 : Document Object Model -> 문서 표준 객체
              HTML 마크업들을 객체처럼 다루기 위해서
              왜? -> 객체는 속성과 함수를 가질 수 있어서
    2. 주요 속성 및 함수
        (1) document.querySelector('선택자');               : HTML 마크업 객체 반환, 반환값 : 객체 1개
        (2) document.querySelectorAll('선택자');            : HTML 마크업 객체 반환, 반환값 : 배열 1개
            *선택자 = 1. 마크업명, 2. .클래스명, 3. #id명 ( '>' 처럼 자식 자손 관계 표현 가능 )
        (3) DOM객체.innerHTML                               : <마크업> !!여기!! </마크업> 에 HTML 문자열 대입/호출
        (4) DOM객체.value                                   : <마크업 value ="!!여기!!"/> 에 자료 대입/호출
                사용가능 마크업 : input, select, textarea...
        (5) DOM객체.style = ''                              : <마크업 style = "!!여기!!"> 에 CSS 요소 대입/호출
        (6) DOM객체.src                                     : <마크업 src = "!!여기!!"> 에 파일경로 대입/호출
                사용가능 마크업 : img, audio ...
        (7) DOM객체.remove();                               : HTML에서 해당 마크업 지우기
        (8) DOM객체.classList
                DOM객체.classList.add();                    : 지정 마크업에 클래스 추가
                DOM객체.classList.remove();                 : 지정 마크업에 클래스 삭제
                DOM객체.classList.toggle();                 : 지정 마크업에 클래스 추가 / 삭제
                DOM객체.classList.contains();               : 지정 마크업에 클래스 존재 여부( true / false ) 반환
** 항상 console.log()로 확인해가면서 하기 -> 오류 확인용
*/