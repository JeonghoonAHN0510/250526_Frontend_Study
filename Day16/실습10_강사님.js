// - 지역변수 : { } 안에서 선언된 변수(let/const)는 밖으로 나갈 수 없다.
//     for ( let i = 0; i <= 배열.length - 1; i++){
//         let A = 1;
//     }
//     console.log( i );   // for 안에서 선언된 변수이므로 호출 불가능
//     console.log( A );   // for 안에서 선언된 변수이므로 호출 불가능
//     왜? 지역변수 장점 : 특정한 범위 내에서만 사용 -> 범위를 벗어나면 변수는 사라진다. -> 메모리 효율성 증가

// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];
// 2. 로직 ( 큰 그림을 그리기 )
    // 1) 학생명 전체 출력
for ( let i = 0; i <= students.length - 1; i++){
    const student = students[i];
    document.write( `<h3> ${student.name} ( ${student.major} ) </h3>` );
    // 2) 수강중인 과목명 출력 ( for 중첩을 하기 전에 밖에서 for문 확인 후 중첩하는 방법도 괜찮다~ )
    for ( let j = 0; j <= enrollments.length - 1; j++){
        const enrollment = enrollments[j];
        if ( student.studentId == enrollment.studentId ){   // 내가 수강 중인 내역
    // 3) '과목코드'를 이용한 '과목명'이 필요
            for ( let k = 0; k <= courses.length - 1; k++){
                const course = courses[k];
                if ( course.courseId == enrollment.courseId ){
                    document.write( `<h4> ${ course.courseName } </h4>` )
                    document.write( `<h5> 성적 : ${enrollment.grade} </h5>` );
                    document.write( `<h5> 이수여부 : ${ enrollment.grade == 'F' ? 'fail' : 'pass' }</h5>` );
                }
            }
        }
    }
}