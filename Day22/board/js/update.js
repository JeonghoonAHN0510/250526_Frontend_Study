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
function updateBoard(){
    // 1. URL 경로 가져오기
    const url = new URLSearchParams(location.search);
    // 2. URL 경로에서 내가 선택한 게시물번호(no) 가져오기
    const selectNo = url.get('no');
    // 3. localStorag에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    }
    // 4. 반복문 이용하여 선택한 게시물번호와 같은 게시물 찾기
    for ( let i = 0 ; i < boardList.length; i++){
        const obj = boardList[i];
        if ( obj.no == selectNo ){
            // 5. 찾은 게시물에 새롭게 입력받은 값을 대입
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;
            // 6. localStorage에 배열 저장
            localStorage.setItem('boardList', JSON.stringify(boardList));
            // 7. 성공하면 view.html로 이동
            location.href=`view.html?no=${obj.no}`;
            alert('수정 성공');
        }
    }
}