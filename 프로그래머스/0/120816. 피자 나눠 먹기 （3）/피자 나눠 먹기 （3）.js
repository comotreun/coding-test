function solution(slice, n) {
    var answer = 1;
    let b_slice = slice;
    
    while (slice < n) {
        slice += b_slice;
        console.log(slice);
        answer += 1;
    }
    
    return answer;
}