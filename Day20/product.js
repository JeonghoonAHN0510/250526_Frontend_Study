// =============================제품 등록 함수=============================
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

    let pno = productList.length == 0 ? 1 : productList[productList.length - 1].pno + 1;

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
    let jsonData = JSON.stringify(productList)
    localStorage.setItem('productList', jsonData)
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
            localStorage.setItem('productList' , JSON.stringify(productList));
            alert(`제품 삭제 완료`); // 안내
            productsList(); // 제품 목록 자동 업데이트. 제품 조회 함수명에 따라 변경하기!!!
            stockTypeOption();  // 재고 변동 카테고리 함수 호출
            return; // 함수 종료
        }   // if end
    }   // for end
    // (2) 삭제할 제품 번호가 안 맞으면?
    alert('삭제할 제품이 없습니다.');
}   // func end