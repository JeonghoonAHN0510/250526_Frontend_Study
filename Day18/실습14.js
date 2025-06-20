// [실습14: 제품 관리 페이지]
// 1. 목표
//     사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
// 2. 화면 구성
//     페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
//     제품 등록 영역 (<div id="header">):
//         카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
//         제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
//         제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
//         제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
//         등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
//     제품 목록 영역 (<div id="main">):
//         등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
//         표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
//         각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

// 3. 핵심 기능
//     초기 데이터 표시:
//         사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
//         제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

//     제품 등록 기능:
//         사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
//         제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
//         첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

//     제품 관리 기능:
//         삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
//         수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.

/*
[ 작업순서 ]
    1. [프] 화면 스케치(프로토타입)
    2. [프] HTML과 CSS 표현
    3. [백] 데이터 모델링
    4. [백] 기능(함수) 설계
    5. [백] 로직 구현
    6. [백] 테스트
*/

// ==================================[ 데이터 모델링 ]==================================
// 1. 카테고리 목록
const categoryList = [
    {cno : 1, cname : '음료'},
    {cno : 2, cname : '과자'}
];
// 카테고리코드를 자동으로 부여하기 위한 현재 코드번호, 샘플의 마지막 코드 번호로 초기화
// categoryList[categoryList.length-1].cno
let currentCno = 2;

// 2. 제품 목록, 이미지 등록 없을 시 : 'https://placehold.co/100x100' 기본값
const productList = [
    {pno : 1, cno : 1, pname : '코카콜라', pprice : 1000, pimg : 'https://placehold.co/100x100', pdate : '2025-06-17'},
    {pno : 2, cno : 2, pname : '새우깡'  , pprice : 1200, pimg : 'https://placehold.co/100x100', pdate : '2025-06-17'},
    {pno : 3, cno : 1, pname : '사이다'  , pprice : 1100, pimg : 'https://placehold.co/100x100', pdate : '2025-06-17'}
];
// 제품코드를 자동으로 부여하기 위한 현재 코드번호, 샘플의 마지막 코드 번호로 초기화
// productList[productList.length-1].pno
let currentPno = 3;
// 확인용
// console.log( categoryList );
// console.log( productList );

// ==================================[ 기능(함수) 설계 ]==================================
// 1. 카테고리 목록 출력 함수
// 실행조건 : 페이지가 열렸을 때 실행
categoryPrint();
function categoryPrint(){       // 함수 선언
    // console.log('----categoryPrint 실행----')
    // 1. 어디에
    const categoryInput = document.querySelector('#categoryInput');
    // console.log( categoryInput );
    // 2. 무엇을, 카테고리목록 내 객체정보를 하나씩 html 형식으로
    let html = `<option value="" disabled selected>카테고리 선택</option>`;
    for (let i = 0; i <= categoryList.length - 1; i++){
        const category = categoryList[i];   // i번째 카테고리
        // console.log( category );
        html += `<option value="${category.cno}">${category.cname}</option>`;
    }
    // 3. 출력
    // console.log ( html );
    categoryInput.innerHTML = html;
} // 함수 종료

// 2. 제품 등록 함수
// 실행조건 : 등록버튼을 onclick했을 떄
function productAdd(){  // 함수 선언
    // console.log('----productAdd 실행----')
    // 1. 입력 마크업객체 가져오기
    const categoryInput = document.querySelector('#categoryInput'); // console.log( categoryInput );
    const pnameInput = document.querySelector('#pnameInput');       // console.log( pnameInput );
    const ppriceInput = document.querySelector('#ppriceInput');     // console.log( ppriceInput );
    const pimgInput = document.querySelector('#pimgInput');         // console.log( pimgInput );
    // 2. 입력 마크업객체에서 value 가져오기
    const cno = categoryInput.value;    // console.log( cno );
    const pname = pnameInput.value;     // console.log( pname );
    const pprice = ppriceInput.value;   // console.log( pprice );
    const pimg = pimgInput.files[0];    // console.log( pimg );
        // 첨부파일은 file[0] -> 선택된 첨부파일의 1번째 파일 가져오기
    // 현재 날짜 구하기 -> new Date() 객체
    let year = new Date().getFullYear();  // 현재 연도 반환 함수
    let month = new Date().getMonth()+1;  // 현재 월 반환 함수 *1월 : 0이라서 +1 필수
        month = month < 10 ? `0${month}` : month; // 만약에 월이 한자리면 앞에 '0'을 붙인다.
    let day = new Date().getDate();       // 현재 일 반환 함수
        day = day < 10 ? `0${day}` : day;
    let pdate = `${year}-${month}-${day}`;  console.log( pdate )
    // 3. 유효성 검사 -> 현재 수준에선 생략
    // 입력값이 없으면 등록 실패
    if ( cno == '' || pname == '' || pprice == '' ){
        alert('비어있는 항목이 있습니다. [실패] ');
        return; // 반환값 없는 함수 종료 -> 아래 코드는 실행되지 않는다.
    }
    // 4. 데이터 객체로 구성
    const obj = {
        pno : ++currentPno, // 제품코드 : 1 증가 후 구성
        cno : Number(cno),
        pname : pname, pprice : Number(pprice),
        // URL.createObjectURL() : 선택한 파일 객체의 url 주소 생성 함수
        pimg : pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
        pdate : pdate
    };                                  // console.log( obj );
    // 5. 구성한 객체를 배열에 저장
    productList.push( obj );            // console.log( productList );
    // 객체 value 초기화
    categoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';
    alert('제품 등록 성공')
    productPrint(); // 등록 성공 후, 제품 출력
} // 함수 종료

// 3. 제품 출력 함수
// 실행조건 : 1. JS가 실행됐을 때, 2. 등록/삭제/수정 했을 때
productPrint();
function productPrint(){
    console.log('----productPrint 실행----')
    // 1. 어디에
    const tbody = document.querySelector('#tbody');
    // 2. 무엇을
    let html = ``;
    for (let i = 0; i <= productList.length - 1; i++){
        const product = productList[i];
        const category = getCategory(product.cno);
        html += `<tr>
                    <td><img src="${product.pimg}"></td>
                    <td>${category.cname}</td>
                    <td>${product.pname}</td>
                    <td>${product.pprice.toLocaleString()}</td>
                    <td>${product.pdate}</td>
                    <td><button onclick="productDelete(${product.pno})" class="btnDelete">삭제</button>
                    <button onclick="productEdit(${product.pno})" class="btnEdit">수정</button></td>
                </tr>`;
    }
    // 3. 출력
    tbody.innerHTML = html;
} // 함수 종료

// 4. 제품 삭제 함수 -> 배열 내 삭제할 객체를 찾아서 .splice
// 실행조건 : 삭제버튼을 onclick 했을 때
// 매개변수 : 제품코드
function productDelete( pno ){
    // console.log('----productDelete 실행----'); console.log( pno );
    // 1. 삭제할 번호의 객체를 찾는다.
    for ( let i = 0; i <= productList.length - 1; i++){
        if ( productList[i].pno == pno ){   // i번째 제품코드와 삭제할 제품코드가 같으면
            productList.splice(i , 1);      // 해당 i번째부터 1개 삭제
            alert('제품 삭제 성공');        // 안내
            productPrint();                 // 삭제 이후 제품목록 새로고침(렌더링)
            return;                         // 목표 이뤘으니 함수 종료
        }
    }
    // 2. 못 찾았다면
    alert('[오류] 삭제 실패')         // 오류 발생
} // 함수 종료

// 5. 제품 수정 함수 -> 새로운 정보를 받아 배열 내 수정할 객체를 찾아서 대입한다.
// 실행조건 : 수정버튼을 onclick 했을 때
// 매개변수 : 제품코드
function productEdit( pno ){
    console.log('----productEdit 실행----'); console.log( pno );
    // 1. 수정할 번호의 객체를 찾는다.
    for (let i = 0; i <= productList.length - 1; i++){
        if ( productList[i].pno == pno ){               // i번째 제품코드와 수정할 제품코드가 같으면
            const pname = prompt("수정할 제품명 : ");   // 수정할 제품명 입력받기
            const pprice = prompt("수정할 제품가격 : ");// 수정할 제품가격 입력받기
            productList[i].pname = pname;
            productList[i].pprice = Number(pprice);
            alert('수정 성공');
            productPrint();                             // 수정 후 제품목록 새로고침(렌더링)
            return;                                     // 성공 후 함수 종료
        }
    }
    // 2. 못 찾았다면
    alert('[오류] 수정 실패')
} // 함수 종료

// 6. 카테고리번호(cno)로 카테고리객체 1개 반환 함수
// -> 카테고리번호로 카테고리명을 가져오기 위해서!!!!!!
// 3번 제품출력함수와 연계
// 매개변수 : cno
function getCategory( cno ){
    console.log('----getCategory 실행----');    console.log( cno );
    // 1. 매개변수(cno)를 가진 카테고리 객체 찾기
    for( let i = 0; i <= categoryList.length - 1; i++){
        if ( cno == categoryList[i].cno ){  // i번째 카테고리객체의 cno와 매개변수 cno가 같으면
            return categoryList[i];         // 찾은 객체를 반환
        }
    }
    // 2. 못 찾았다면
    return null;
}