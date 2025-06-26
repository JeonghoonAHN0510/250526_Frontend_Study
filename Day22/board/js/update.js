// 수정 페이지 -> 기존 데이터를 조회 후 수정 처리

// 1. 기존 데이터 호출
getBoard();
function getBoard(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    }

    
    for ( let i = 0; i<boardList.length; i++){
        const obj = boardList[i];
        if ( obj.no == selectNo ){
            // 기존 게시물 정보를 input 마크업에 넣기
            document.querySelector('#titleInput').value = obj.title;
            document.querySelector('#contentInput').value = obj.content;
        }
    }
};

// 2. 수정 처리 함수