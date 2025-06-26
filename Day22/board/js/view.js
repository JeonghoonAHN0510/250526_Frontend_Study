getBoard();     // JS 실행 시, 최초 1번 자동으로 실행
function getBoard(){
    // 1. URL 상의 웹주소 가져오기
    const url = new URLSearchParams( location.search );

    // 2. 웹주소에서 선택된 게시물번호 가져오기
    const selectNo = url.get('no');

    // 3. localStorage에서 배열 가져오기 -> 나중에 함수로 간단하게 정리
    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    };

    // 4. 배열에서 선택된 게시물번호와 일치한 게시물 가져오기
    for ( let i = 0; i <= boardList.length- 1;i++){
        const obj = boardList[i];
        if ( obj.no == selectNo ){  // 선택한 게시물번호와 일치한 게시물을 찾으면     
            // 5. 찾았으면 출력
            document.querySelector('#title').innerHTML = obj.title;     // 제목 출력
            document.querySelector('#content').innerHTML = obj.content; // 내용 출력
        }
    }
}