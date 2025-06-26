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


// 삭제 버튼 함수
function boardDelete(){
    // 1. URL 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);

    // 2. 웹주소에서 선택된 게시물번호 가져오기
    const selectNo = url.get('no');

    // 3. localStorage에서 배열 가져오기 -> 나중에 함수로 간단하게 정리
    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    };

    // 4. 배열에서 선택된 게시물번호와 일치하는 게시물을 찾으면
    for ( let i = 0; i <= boardList.length - 1; i++){
        const obj = boardList[i];
        if ( obj.no == selectNo ){
            // 5. 확인용 비밀번호를 입력받아서, 기존 비밀번호와 일치하면 삭제 else 실패
            const confirm = prompt('비밀번호 입력');
            if ( confirm == obj.pwd ){  // 비밀번호가 일치하면
                // 6. 삭제 성공시, list.html로 이동 else 이동x
                boardList.splice(i,1);  // 일치한 게시물 삭제
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제 성공');
                location.href="list.html";
            }else {
                alert('삭제 실패 : 비밀번호 불일치');
            }
        }
    }
}

// 수정 버튼 함수
function boardUpdateView(){
    // 1. URL 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 웹주소에서 선택된 게시물번호 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기 -> 함수로 간단히 정리 가능
    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    };    
    // 4. 배열에서 선택된 게시물번호와 일치하는 게시물을 찾으면
    for ( let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if ( obj.no == selectNo ){
            // 5. 확인용 비밀번호를 입력받아서, 기존 비밀번호와 일치하면 수정페이지로 이동
            const confirm = prompt('비밀번호 입력');
            if ( confirm == obj.pwd ){                          // 비밀번호가 일치하면
                location.href = `update.html?no=${obj.no}`;     // 수정페이지로 이동 / 백틱 주의
            }else{
                alert('수정 불가 : 비밀번호 불일치')
            }
        }
    }
}