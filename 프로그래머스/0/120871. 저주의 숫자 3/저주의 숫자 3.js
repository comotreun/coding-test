function solution(n) {
    let num = 1;
    let answer = 1;

    while(n>num){
        num++
        answer++
        while(answer % 3 === 0 || String(answer).includes('3')){
            answer++
        }
    }
    return answer
}