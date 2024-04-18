function solution(quiz) {
    return quiz.map((e) => {
        const [x, op, y, _, z] = e.split(' ');
        
        if (op == '-'){
            let num1 = x - y;
            console.log(num1);
            
            if (num1 == z){
                return "O";
            }
            else {
                return "X";
            }
        }
        
        else if (op == '+'){
            let num2 = (+x) + (+y);
            console.log(num2);
            
            if (num2 == z){
                return "O";
            }
            else {
                return "X";
            }
        }
    })
}