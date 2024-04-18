function solution(a, b, n) {
    let answer = 0;
    let cola = 0;
    let incola = n;
    
    //빈병 개수는 b개
    
    do {
        cola = ~~(incola / a) *b;
        // console.log("빈병 개수"+(cola));
        answer += cola;
        incola = cola + ~~(incola % a);
        // console.log(incola);
    }while (incola >= a) //if (a)2개 미만이면 빈병을 받을 수 없음

    return answer;
}