// [ 실습15 - 인사 관리 대시보드 ] * 제출
// 1. 목표
//     부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
//     사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

// 2. 화면 구성
//     페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
//     부서 관리 영역:
//         부서 등록:  
//             새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
//         부서 목록:  
//             등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "부서명"과 "관리" 열로 구성됩니다.
//             각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

//     사원 관리 영역:
//         사원 등록:
//             사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
//             등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
//             사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
//         사원 목록:
//             등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
//             각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

//     휴가 관리 영역:
//         휴가 신청:
//             등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
//             휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
//             휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
//         휴가 신청 전체 목록:
//             제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
//             각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
//             각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

// 3. 핵심 기능
//     초기 데이터 표시:
//         모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다.
//         페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
//         사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 
//         부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

//     부서 관리 기능:
//         등록: "추가" 버튼 클릭 시, 
//               입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다.
//               이미 존재하는 부서명은 등록되지 않아야 합니다.
//         수정: "수정" 버튼 클릭 시,
//               prompt 대화상자가 나타나 새로운 부서명을 입력받고,
//               입력 완료 시 목록에 즉시 반영되어야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 
//               해당 부서가 목록에서 제거되어야 합니다. 
//               단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

//     사원 관리 기능:
//         등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 
//               사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 
//               사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
//         수정: "수정" 버튼 클릭 시, 
//               prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 
//               해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

//     휴가 관리 기능:
//         신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
//         취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.

// 1. [프] 화면 스케치(프로토타입)
// 2. [프] HTML과 CSS 표현
// 3. [백] 데이터 모델링
// 4. [백] 기능(함수) 설계
// 5. [백] 로직 구현
// 6. [백] 테스트

// ===================== 1. 카테고리 목록 만들기 =====================
    // 부서 리스트
const departmentList = [
    {dId : 1, dName : '개발팀'},
    {dId : 2, dName : '디자인팀'},
    {dId : 3, dName : '기획팀'}
];
// 마지막 부서번호 뽑기
let lastdId = departmentList[departmentList.length - 1].dId;
// console.log( lastdID );
    // 사원 리스트
const staffList = [
    {sId : 1, dId : 1, name : '유재석', staffImg : 'https://placehold.co/100x100', grade : '선임 개발자'},
    {sId : 2, dId : 3, name : '강호동', staffImg : 'https://placehold.co/100x100', grade : '팀장'},
    {sId : 3, dId : 3, name : '신동엽', staffImg : 'https://placehold.co/100x100', grade : '대리'},
    {sId : 4, dId : 2, name : '홍길동', staffImg : 'https://placehold.co/100x100', grade : '수석디자이너'}
];
// 마지막 사원번호 뽑기
let lastsId = staffList[staffList.length - 1].sId;
    // 휴가 리스트
const holiList = [
    {sId : 1, startDate : '2025-08-04', endDate : '2025-08-06', reason : '병원진료'},
    {sId : 1, startDate : '2025-08-04', endDate : '2025-08-06', reason : '병원진료'}
];
// ===================== 2. 함수 만들기 =====================
// ===================== 1) 부서 관리 =====================
// 1. 신규 부서 추가 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : '추가' 버튼을 onclick 했을 때
function departmentAdd(){
    // console.log('----departmentAdd 실행----')
    // 1. 무엇을 : <input class="departmentInput" type="text"> 값을
    let departmentInput = document.querySelector('.departmentInput');
    // console.log( departmentInput );
    let dNameValue = departmentInput.value;
    // 2. 어디에 : 부서 리스트에 -> 어떻게? 객체리스트를 만들어서 .push
    const obj = {dId : ++lastdId, dName : dNameValue};
    // console.log( obj );
    departmentList.push( obj );
    departmentPrint()
};

// 2. 부서 목록 출력 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : 페이지가 열릴 때, 신규 부서가 추가됐을 때, 부서 수정/삭제 했을 때
departmentPrint();
function departmentPrint(){
    // console.log('----departmentPrint 실행----')
    // 1. 어디에 : <tbody class="dL-tbody">
    const tbody = document.querySelector('.dL-tbody');
    // console.log( tbody );
    // 2. 무엇을
    let html = ``;
    for ( let i = 0; i <= departmentList.length - 1; i++){
        let department = departmentList[i];
        // console.log( department );
        html += `<tr>
                    <td>${department.dName}</td>
                    <td>
                        <button onclick="departmentEdit(${department.dId})">수정</button>
                        <button onclick="departmentDelete(${department.dId})">삭제</button>
                    </td>
                </tr>`;
    }
    // 3. 출력
    tbody.innerHTML = html;
};
// 3. 부서 수정 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : '수정'버튼과 같은 열의 부서 id
// 실행조건 : '수정' 버튼을 눌렀을 때
function departmentEdit( dId ){
    console.log('----departmentEdit 실행----')
    for (let i = 0; i <= departmentList.length - 1; i++){
        if ( departmentList[i].dId == dId ){                // i번째 제품코드와 수정할 제품코드가 같으면
            const dName = prompt("수정할 제품명 : ");       // 수정할 제품명 입력받기
            departmentList[i].dName = dName;
            alert('수정 성공');
            departmentPrint();                              // 수정 후 제품목록 새로고침(렌더링)
            return;                                         // 성공 후 함수 종료
        }
    }
}


// 4. 부서 삭제 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : '삭제'버튼과 같은 열의 부서 id
// 실행조건 : '삭제' 버튼을 눌렀을 때
function departmentDelete( dId ){
    console.log('----departmentDelete 실행----')
    for ( let i = 0; i <= departmentList.length - 1; i++){
        if ( departmentList[i].dId == dId ){   // i번째 제품코드와 삭제할 제품코드가 같으면
            departmentList.splice(i , 1);      // 해당 i번째부터 1개 삭제
            alert('부서 삭제 성공');            // 안내
            departmentPrint();                 // 삭제 이후 부서목록 새로고침(렌더링)
            return;                             // 목표 이뤘으니 함수 종료
        }
    }    
}

// ===================== 2) 사원 관리 =====================

// 1. 신규 사원 등록 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : '등록' 버튼을 눌렀을 때
function staffAdd(){
    // console.log('----staffAdd 실행----');
    // 1. 무엇을 : 입력된 이름, 직급, 부서, 사진을
    const staffNameInput = document.querySelector('.staffNameInput');    // 이름
    const staffGradeInput = document.querySelector('.staffGradeInput');  // 직급
    const departmentSelect = document.querySelector('.departmentSelect');// 부서
    const staffImgInput = document.querySelector('.staffImgInput');     // 사진

    const staffName = staffNameInput.value;     // console.log( staffName )
    const staffGrade = staffGradeInput.value;   // console.log( staffGrade )
    const department = departmentSelect.value;  // console.log( department )
    const staffImg = staffImgInput.files[0];    // console.log( staffImg )
    // 2. 유효성 검사
    if ( staffName == '' || staffGrade == '' || department == '' ){
        alert('[오류] 비어있는 항목이 있습니다.');
        return; // 반환값 없는 함수 종료 -> 아래 코드는 실행되지 않는다.
    }
    // 3. 데이터 객체 만들기
    const obj = {
        sId : ++lastsId,
        dId : department,
        name : staffName,
        staffImg : staffImg ? URL.createObjectURL(staffImg) : 'https://placehold.co/100x100',
        grade : staffGrade
    };
    // console.log( obj );
    // 4. 어디에 : 사원 리스트에 .push로
    staffList.push( obj );
    staffListPrint()
};


// 2. 부서 옵션 출력 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : 페이지가 열릴 때
departmentCategoryPrint();
function departmentCategoryPrint(){
    // console.log('----departmentCategoryPrint 실행----');
    // 1. 어디에 : 부서 카테고리 출력 셀렉에
    let departmentSelect = document.querySelector('.departmentSelect');
    // console.log( departmentSelect );
    // 2. 무엇을 : 부서 목록을 option으로
    let html = `<option value="" disabled selected>부서를 선택하세요</option>`;
    for ( let i = 0; i <= departmentList.length - 1; i++){
        let department = departmentList[i];
        // console.log( department );
        html += `<option value="${department.dId}">
                ${department.dName}
                </option>`;
    };
    // 3. 출력
    departmentSelect.innerHTML = html;
};

// 3. 사원 목록 출력 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : 페이지가 열릴 때, 신규 사원 등록했을 때, 사원 수정/삭제 했을 때
staffListPrint();
function staffListPrint(){
    // console.log('----staffListPrint 실행----')
    // 1. 어디에 : 사원 전체 목록에
    const tbody = document.querySelector('.sL-tbody');
    // console.log( tbody );
    // 2. 무엇을 : 사원 리스트를
    let html = ``;
    for ( let i = 0; i <= staffList.length - 1; i++){
        let staff = staffList[i];
        let department = getDepartment ( staff.dId );
        // console.log( staff );
        html += `<tr>
                    <td><img src="${staff.staffImg}"></td>
                    <td>${staff.name}</td>
                    <td>${department}</td>
                    <td>${staff.grade}</td>
                    <td>
                        <button onclick = "staffEdit(${staff.sId})">수정</button>
                        <button onclick = "staffDelete(${staff.sId})">삭제</button>
                    </td>
                </tr>`;
    }
    // 3. 출력
    tbody.innerHTML = html;
};

// 4. 사원 수정 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 사원 번호
// 실행조건 : '수정' 버튼을 눌렀을 때
function staffEdit( sId ){
    console.log('----staffEdit 실행----')
    // 어디에 : 사원 리스트에서
    // 무엇을 : 사원 객체 속성명을
    for ( let i = 0; i <= staffList.length - 1; i++){
        if ( staffList[i].sId == sId ){
            let NewName = prompt("수정할 사원명 : ");
            let NewDepartment = prompt("수정할 부서명 : ");
            let NewGrade = prompt("수정할 직급 : ");
            let NewdId = getdepartmentId( NewDepartment );

            console.log (NewName);
            console.log (NewDepartment);
            console.log (NewGrade);
            console.log (NewdId);

            staffList[i].name = NewName;
            staffList[i].grade = NewGrade;
            staffList[i].dId = NewdId;
            alert('수정 성공');
            staffListPrint();
            return;
        }
    }
}

// 5. 사원 삭제 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 사원 번호
// 실행조건 : '삭제' 버튼을 눌렀을 때
function staffDelete( sId ){
    console.log('----staffDelete 실행----')
    // 어디에 : 사원 리스트에서
    // 무엇을 : 사원 객체를
    for ( let i = 0; i <= staffList.length - 1; i++){
        if ( staffList[i].sId == sId ){ // '삭제' 버튼을 누른 사원 번호와 사원 리스트의 사원 번호가 같다면
            staffList.splice(i, 1);
            alert('사원 삭제 성공');
            staffListPrint();
            return;
        }
    }    
};

// ===================== 3) 휴가 관리 =====================

// 1. 신청 사원 옵션 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : 페이지 열릴 때
holiStaff();
function holiStaff(){
    // console.log('----holiStaff 실행----')
    // 1. 어디에 : 휴가신청 사원 셀렉에
    const holiRegisSelect = document.querySelector('.holiRegisSelect');
    // console.log(holiRegisSelect)
    // 2. 무엇을 : 사원 리스트를
    let html = `<option value="" disabled selected>휴가 신청 사원을 선택하세요.</option>`;
    for ( let i = 0; i <= staffList.length - 1; i++){
        let staff = staffList[i];
        html += `<option value="${staff.sId}">
                    ${staff.name}
                </option>`
    }
    // 3. 출력
    holiRegisSelect.innerHTML = html;
};

// 2. 사원 휴가 신청 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 없음
// 실행조건 : 신청 버튼을 onclick했을 때
function holiRegis(){
    console.log('----holiRegis 실행----');
    // 1. 무엇을 : 입력받은 값들을 사원/시작일/종료일/사유
    const holiRegisSelect = document.querySelector('.holiRegisSelect');
    const holiStartDateInput = document.querySelector('.holiStartDateInput');
    const holiEndDateInput = document.querySelector('.holiEndDateInput');
    const holiReasonInput = document.querySelector('.holiReasonInput');

    const holiStaffName = holiRegisSelect.value;        console.log( holiStaffName );
    const holiStartDate = holiStartDateInput.value;     console.log( holiStartDate );
    const holiEndDate = holiEndDateInput.value;         console.log( holiEndDate );
    const holiReason = holiReasonInput.value;           console.log( holiReason );


    // 2. 유효성 검사 -> 시작일 < 종료일
    if ( holiStaffName == '' || holiStartDate > holiEndDate ){
        alert('[오류] 다시 입력하세요.');
        return;
    }
    // 3. 어디에 : 휴가 목록에 -> 어떻게? 객체 만들어서 .push
    const obj = {
        sId : holiStaffName,
        startDate : holiStartDate,
        endDate : holiEndDate,
        reason : holiReason
    }
    holiListPrint();
};


// 3. 휴가 목록 출력 함수
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 
// 실행조건 : 페이지 열릴 때, 휴가 신청 버튼 실행될 때
holiListPrint();
function holiListPrint(){
    console.log('----holiListPrint 실행----');
    
    // 1. 무엇을 : 휴가 리스트를
    let html = ``;
    for( let i = 0; i <= holiList.length - 1; i++){
        html += `<div>
                    <span>이름</span>
                    <button>신청취소</button>
                    <p>${holiList[i].startDate} ~ ${holiList[i].endDate}</p>
                    <p>사유 : ${holiList[i].reason}</p>
                </div>`
    }
    // 2. 어디에 : 휴가 내역에
    const holiListdiv = document.querySelector('.holiList');
    console.log( holiListdiv );
    // 3. 출력
    holiListdiv.innerHTML = html;
}


// ===================== 4) 변환 함수 =====================
// 1. 부서번호로 부서명 반환 함수 -> 부서번호로 부서명 가져오기 위해서
// 생각할 것 : 어디에 / 무엇을
// 매개변수 : 부서번호
// 실행조건 : 사원 목록에 들어갈 함수
function getDepartment ( dId ){
    for ( let i = 0; i <= departmentList.length - 1; i++){
        if ( dId == departmentList[i].dId ){
            return departmentList[i].dName;
        }
    }
};

// 2. 부서명으로 부서번호 반환 함수
// 매개변수 : 부서명
// 실행조건 : 사원 부서 수정 함수
function getdepartmentId( dapartment ){
    for ( let i= 0; i <= departmentList.length - 1; i++){
        if ( dapartment == departmentList[i].dName ){
            return departmentList[i].dId;
        }
    }
}

// 3. 사원명으로 사원번호 반환 함수
// 매개변수 : 사원명
function getStaffId( sName ){
    for ( let i = 0; i <= staffList.length - 1; i++){
        if ( sName == staffList[i].name ){
            return staffList[i].sId;
        }
    }
}

// 4. 사원번호로 사원명 반환 함수
// 매개변수 : 사원번호
function getStaffName( sId ){
    for ( let i = 0; i <= staffList.length - 1; i++){
        if ( sId == staffList[i].sId ){
            return staffList[i].name;
        }
    }
}