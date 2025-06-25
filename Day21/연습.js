// localStroge로부터 productList 가져오는 함수
function getproductList(){
    let productList = localStorage.getItem('productList');
    if ( productList == null ){
        productList = [];
    }else {
        productList = JSON.parse( productList );
    }
    return productList;
};
// localStorage에 productList 저장하는 함수
function setproductList(productList){
    localStorage.setItem('productList', JSON.stringify(productList) );
}


// 제품 등록 함수
function productRegistration(){
    console.log('productRegistration');
    // 입력값 가져오기
    const name = document.querySelector('#nameInput').value;
    const price = document.querySelector('#priceInput').value;
    const info = document.querySelector('#infoInput').value;
    const img = document.querySelector('#imgInput').files[0];

    let productList = getproductList();
    let pcode = productList.length == 0 ? 1 : productList[productList.length - 1].pcode + 1;

    let obj = {
        pcode : pcode,
        pname : name,
        pprice : price,
        info : info,
        pimg : img ? URL.createObjectURL(img) : 'https://placehold.co/100x100'
    }

    productList.push( obj );
    setproductList(productList);
    printProduct();
    alert('제품 등록 성공')

}

// 제품 출력 함수
printProduct();
function printProduct(){
    console.log('printProduct');
    let productList = getproductList();

    let table = document.querySelector('#productTable');

    let html = ``;
    for(let i = 0; i<= productList.length - 1; i++){
        let product = productList[i];
        html += `<tr>
                    <td><img src="${product.pimg}"></td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.info}</td>
                    <td><button onclick = "productDelete(${product.pcode})">삭제</button></td>
                 </tr>`;
    }
    table.innerHTML = html;
}

// 제품 삭제 함수
function productDelete(pcode){
    console.log('productDelete');
    let productList = getproductList();
    for ( let i = 0; i <= productList.length - 1; i++){
        let product = productList[i];
        if ( pcode == product.pcode ){
            productList.splice(i, 1);
            setproductList(productList)
            printProduct();
            alert('제품 삭제 성공');
            return;
        }
    }
    alert('제품 삭제 실패')
}