function solution(n) {
    var answer = 0;
    
    if (n <= 7){
        answer = 1;
        if (n == 0){
            answer = 0;
        }
    }
    else {
        if (n % 7 == 0){
            answer = n/7;
        }
        else {
            answer = (n/7)+1;   
        }
    }
    
    return ~~answer;
}