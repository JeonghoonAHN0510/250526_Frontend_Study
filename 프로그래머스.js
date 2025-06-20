function solution(my_string, m, c) {
    let answer = '';

    let length = my_string.length;
    console.log ( length );
    let lengthM = length / m;
    console.log ( lengthM );
    for (let i = 0; i <= lengthM; i++){
        let sub = my_string.substring(i*m, (i+1)*m)
        console.log( sub );
    }

    return answer;
}

console.log( solution( "ihrhbakrfpndopljhygc", 4, 2 ) )     // happy
console.log( solution( "programmers", 1, 1 ) )              // programmers