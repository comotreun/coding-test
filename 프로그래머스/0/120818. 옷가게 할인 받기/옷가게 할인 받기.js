function solution(price) {
    var answer = price;
    var box = 0;
    
    
    if (price >= 500000){
        box = price*0.2;
        console.log(box);
    }
    else if (price >= 300000){
        box = price*0.1;
        console.log(box);
    }
    else if (price >= 100000){
        box = price*0.05;
        console.log(box);
    }
    else {
        box = 0;
    }
    
    answer -= box;
    
    return ~~answer;
}