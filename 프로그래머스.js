function solution(my_string, queries) {
    let answer = '';
    let input = my_string;

    for ( let i = 0; i <= queries.length - 1; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        console.log(`${i+1}번째`)
        let newArray = '';
        let subString1 = input.substring(0, s);;
        let subString2 = input.substring(s, e+1);;
        let subString3 = input.substring(e);;

        let split = subString2.split('');
        let reverse = split.reverse();
        let join = reverse.join('');
        subString2 = join;

        newArray += subString1;
        newArray += subString2;
        newArray += subString3;
        console.log( subString1 );
        console.log( subString2 );
        console.log( subString3 );
        console.log( newArray );
    }
    

    return answer;
}

console.log( solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]) );


// substring , split(문자열 배열로 나누기) , reverse(배열 뒤집기) , join(배열 합치기) 사용해보기