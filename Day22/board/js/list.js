boardPrint();   // JS가 실행될 때, 함수를 1번 호출
function boardPrint(){
    // 1. 어디에 -> boardTbody에
    const boardTbody = document.querySelector('#boardTbody');
    // 2. 무엇을
    // 2-1. localStorage에서 배열을 가져오기 -> 나중에 함수로 간단하게 정리
    let boardList = localStorage.getItem('boardList');
    if ( boardList == null ){
        boardList = [];
    }else {
        boardList = JSON.parse(boardList);
    };
    // 2-2. 반복문을 이용하여 배열 조회 및 <tr> 구성
    let html = ``;
    for(let i = 0; i <= boardList.length - 1; i++){
        const board = boardList[i];
        html += `<tr>
                    <td>${board.no}</td>
                    <td><a href="view.html?no=${board.no}">${board.title}</a></td>
                 </tr>`;
    };
    // 3. 출력
    boardTbody.innerHTML = html;
}