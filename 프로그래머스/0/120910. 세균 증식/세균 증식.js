function solution(n, t) {
    var answer = n;
    let box = n;
    
    for (let i = 1; i <= t; i++){
        console.log(i);
        answer *= 2;
    }
    
    return answer;
}