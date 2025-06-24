// 본 프로젝트는 카페, 매점 등에서 사용될 수 있는 키오스크 시스템의 '관리자 페이지'와 '사용자 페이지'를 개발하는 것을 목표로 합니다.
// 관리자는 제품 및 재고를 효율적으로 관리하고, 주문 내역을 추적하며, 매출 현황을 파악할 수 있습니다.
// 사용자는 직관적인 인터페이스를 통해 제품을 선택하고 장바구니에 담아 주문할 수 있습니다.


// [ 요구사항1 ]
// "제품 관리' 기능을 위한 기본 HTML 구조를 구현합니다. CSS 스타일링은 이 단계에서 제외됩니다.

// 제품 등록 폼: 제품명, 가격, 간단한설명, 이미지URL 을 입력할 수 있는 <input>, <textarea>, <button> 태그 포함.
// 제품 목록 테이블: 제품 정보를 표시할 <table> 태그와 <thead>, <tbody> 태그 포함. 
// 버튼: '제품 등록', '선택 제품 삭제' 버튼 포함."

// [ 요구사항2 ]
// "관리자가 제품 정보를 등록, 조회, 삭제할 수 있는 기능을 정의합니다.
// 요구사항에 맞게 데이터모델링 과 샘플 데이터를 구성합니다. ( localStorage 아직 사용하지 않기 )

// 제품 등록 (Product Registration) - 나
// 입력 필드: 제품 ID(고유, 자동), 제품명, 가격 , 간단설명, 이미지URL,
// 동작: 등록 성공/실패 메시지 표시, 제품 목록 자동 업데이트.

// 전체 제품 조회 (View All Products) - 김진숙님
// 기능: 현재 등록된 모든 제품 목록을 표 형태로 조회.
// 표시 항목: 제품 ID, 제품명, 가격,간단설명,이미지URL, 삭제버튼

// 제품 삭제 (Delete Product) - 최동진님
// 기능: 특정 제품을 시스템에서 제거.
// 입력/선택: 제품 목록에서 삭제할 제품의 삭제버튼 클릭
// 동작: 삭제 성공/실패 메시지, 제품 목록 자동 업데이트."

//=============================제품 등록 함수=============================
// 실행조건 : 제품 등록 버튼이 눌렸을 때
function productRegistration() {
    console.log('----productRegistration----');
    // 1. 무엇을 : 입력받은 값들을
    // 1-1. 입력 마크업 객체 가져오기
    const nameInput = document.querySelector('#nameInput');     // console.log( nameInput );
    const priceInput = document.querySelector('#priceInput');   // console.log( priceInput );
    const infoInput = document.querySelector('#infoInput');     // console.log( infoInput );
    const imgInput = document.querySelector('#imgInput');       // console.log( imgInput );
    // 1-2. 입력 마크업 객체의 입력값 가져오기
    const name = nameInput.value;       // console.log( name );
    const price = priceInput.value;     // console.log( price );
    const info = infoInput.value;       // console.log( info );
    const img = imgInput.files[0];      // console.log( img );
    // 1-3. 유효성 검사
    if (name == '' || price == '') {
        alert('[오류] 비어있는 항목이 있습니다.');
        return;                         // 반환값 없는 함수 종료      
    }

    // 2. 어디에 : 제품 목록에
    // 2-1. 입력값들 객체화하기
    // console.log(pno);
    const obj = {
        pno: pno++,
        pname: name,
        pprice: Number(price),
        pinfo: info,
        pimg: img ? URL.createObjectURL(img) : 'https://placehold.co/100x100'
    }; console.log(obj);
    // 2-2. 객체를 리스트에 넣기
    productList.push(obj); console.log(productList);
    // 제품 목록 업데이트 함수 넣기
    productsList();
    stockTypeOption();
    alert('제품 등록 성공');
}


// 2. 제품목록 출력함수
productsList();
function productsList() {
    console.log('제품목록 출력함수 >>  productsList(); exe');
    // 1/2. 마크업 객체/ 입력값 가져오기
    const tbody = document.querySelector('#productTable tbody'); console.log(tbody);

    // 3. 상품 배열 순회
    html = '';
    for (let i = 0; i <= productList.length - 1; i++) {
        let product = productList[i]; console.log(product);

        html += `<tr>
                    <td> <img src= ${product.pimg} /> </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice.toLocaleString()}  </td>
                    <td> ${product.pinfo}  </td>
                    <td> <button onclick="productDelete(${product.pno})" > 선택 제품 삭제 </button> </td>
                </tr>`

    }
    tbody.innerHTML = html;

} // productList(); end


/* 3. 제품 삭제함수 */

function productDelete(pno) {  // 버튼 눌렀을 때 삭제하는 함수
    console.log(`productDelete XXOK`); // 버튼 입력 먹히는지 확인해라
    console.log(pno);  // 삭제할 번호 객체 확인
    // (1) for문 if문 splice 활용해서 삭제할 번호 객체 찾기
    for (let i = 0; i <= productList.length - 1; i++) {
        product = productList[i]
        if (product.pno == pno) {   // 프로덕트리스트 인덱스의 프로덕트 넘버가, 찾으려는 프로덕트 넘버와 같다면
            productList.splice(i, 1);  // 해당 인덱스에서 1개 요소 삭제하기
            alert(`제품 삭제 완료`); // 안내
            productsList(); // 제품 목록 자동 업데이트. 제품 조회 함수명에 따라 변경하기!!!
            stockTypeOption();  // 재고 변동 카테고리 함수 호출
            return; // 함수 종료
        }   // if end
    }   // for end
    // (2) 삭제할 제품 번호가 안 맞으면?
    alert('삭제할 제품이 없습니다.');
}   // func end