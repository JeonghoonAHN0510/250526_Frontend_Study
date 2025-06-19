function solution(my_string, queries) {
    let answer = '';

    for ( let i = 0; i <= queries.length - 1; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        for ( let j = 0; j <= my_string.length - 1; j++){
            answer += my_string[j];
            if ( j >= s && j <= e ){
                let substring = my_string.substring(s, e+1);
                for ( let k = 0; k <= substring.length - 1; k++){
                    // substring 뒤집기
                }
            }
        }
    }


    return answer;
}