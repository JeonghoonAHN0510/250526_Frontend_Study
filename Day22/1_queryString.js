/*
1개월 : html / css / js
2개월 : java / DB
3개월 : html / css / js + java / DB (웹개발)
4개월 : spring / react (웹개발)
5개월 : flutter (앱개발)
*/


/*
[쿼리스트링]
- URL(웹주소)에 매개변수를 사용
- URL?변수명=값
- 페이지 요청 간 데이터 전달
    1. 사용법
        (1) 이동하는 방법
            1) HTML : <a href="URL?변수명=값&변수명=값"/>
            2) JS   : location.href="URL?변수명=값&변수명=값"
        (2) URL 상의 매개변수 가져오는 방법
            1) let url = new URLSearchParams(location.search);
            2) let param = url.get( URL상의 변수명 );
*/

// [1]
let url1 = new URLSearchParams(location.search);
console.log( url1 );
// [2]
let param = url1.get( 'param' );
console.log( param );
// [3]
let url2 = new URLSearchParams(location.search);
let pcode = url2.get( 'pcode' );
console.log( pcode );

let page = url2.get( 'page' );
console.log( page );
// [4]
function 이동함수(){
    // JS에서 페이지 요청하는 방법 : location.href="URL?변수명=값"
    location.href="1_queryString.html?sort=1&code=8"
};
let url3 = new URLSearchParams(location.search);
let sort = url3.get('sort');
console.log( sort );
let code = url3.get('code');
console.log( code );