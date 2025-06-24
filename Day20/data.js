//=================================제품 리스트=================================
let productList = localStorage.getItem('productList');
if ( productList == null ){
    productList = [];
}else {
    productList = JSON.parse( productList );
};
console.log( productList );

//=================================재고 리스트=================================
let stockList = localStorage.getItem('stockList');
if ( stockList == null ){
    stockList = [];
}else {
    stockList = JSON.parse( stockList );
};
console.log( stockList );

//=================================장바구니 리스트=================================
let cartList = localStorage.getItem('cartList');
if ( cartList == null ){
    cartList = [];
}else {
    cartList = JSON.parse( cartList );
};
console.log( cartList );