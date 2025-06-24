//=============================제품 등록 함수=============================
// 실행조건 : 제품 등록 버튼이 눌렸을 때
function StockRegistration(){
    console.log('----StockRegistration----');
    // 1. 무엇을 : 입력받은 값들을
    // 1-1. 입력 마크업 객체 가져오기
    const stockInput = document.querySelector('#stockInput');           // console.log( stockInput );
    const stockTypeInput = document.querySelector('#stockTypeInput');   // console.log( stockTypeInput );
    const stockCountInput = document.querySelector('#stockCountInput'); // console.log( stockCountInput );
    const stockCuzInput = document.querySelector('#stockCuzInput');     // console.log( stockCuzInput );
    
    // 1-2. 입력 마크업 객체의 입력값 가져오기
    const stock = stockInput.value;             console.log( stock );
    const stockType = stockTypeInput.value;     console.log( stockType );
    const stockCount = stockCountInput.value;   console.log( stockCount );
    const stockCuz = stockCuzInput.value;       console.log( stockCuz );
    // 1-3. 유효성 검사
    if ( stock == '' || stockType == '' || stockCount == '' ){
        alert('[오류] 비어있는 항목이 있습니다.');
        return;                         // 반환값 없는 함수 종료             
    }
    // 2. 어디에 : 제품 목록에
    console.log( stock );
    let pNum = getProductNum( stock );
    console.log( pNum )
    // stype 얻는 함수
    let stype = getstype( stockType );
    console.log( stype );
    // 2-1. 입력값들 객체화하기
    const obj = {
        sno: sno++,
        pno: pNum,
        stype: stype,
        scount: stockCount,
        scuz: stockCuz
    }; console.log( obj );
    // 2-2. 객체를 리스트에 넣기
    stockList.push( obj );
    console.log( stockList );
    // 재고 목록 업데이트 함수 넣기
    
    alert('재고 등록 성공')
};


//=============================변동명 옵션 함수=============================
// 실행조건 : 페이지가 열릴 때, 제품이 등록/삭제 되었을 때
stockTypeOption();
function stockTypeOption(){
    // console.log('----stockTypeOption----');
    let html = `<option disabled selected> 제품명 </option>`;
    // html 넣을 객체 가져오기
    let stockInput = document.querySelector('#stockInput');
    // console.log( stockInput );
    for ( let i = 0; i <= stockList.length - 1; i++){
        let stock = stockList[i];
        // console.log( stock );
        let product = getProductName( stock.pno )
        // console.log(product)
        html += `<option>
                    ${product}
                </option>`
    }
    stockInput.innerHTML = html;
}

//=============================제품 ID 옵션 함수=============================
// 실행조건 : 페이지가 열릴 때
// 입고 유형
let stype = true;
stockOption();
function stockOption(){
    console.log('----stockOption----');
    let html = `<option disabled selected> 변동유형 </option>`;
    // html 넣을 객체 가져오기
    let stockTypeInput = document.querySelector('#stockTypeInput');
    console.log( stockTypeInput );
    html += `<option>입고</option>
            <option>출고</option>`
    stockTypeInput.innerHTML = html;
};

//=============================제품코드로 제품이름 출력 함수=============================
// 매개변수 : pno
function getProductName( pno ){
    for ( let i = 0; i <= productList.length - 1; i++){
        let product = productList[i];
        if ( pno == product.pno ){
            return product.pname;
        }
    }
};
//=============================제품이름으로 제품코드 출력 함수=============================
// 매개변수 : pname
function getProductNum( pname ){
    for ( let i = 0; i <= productList.length - 1; i++){
        let product = productList[i];
        if ( pname == product.pname ){
            return product.pno;
        }
    }
}
//=============================입고유형으로 true/false 출력 함수=============================
function getstype( boolean ){
    // 입력값 객체 가져오기
    let stockTypeInput = document.querySelector('#stockTypeInput');
    let stockType = stockTypeInput.value;
    let stype = boolean == '입고' ? true : false;
    return stype;
}